import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import paypal from '@paypal/checkout-server-sdk'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Initialize PayPal
const paypalEnvironment = process.env.PAYPAL_MODE === 'live'
  ? new paypal.core.LiveEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
  : new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
const paypalClient = new paypal.core.PayPalHttpClient(paypalEnvironment)

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'HBCU Heroes API is running' })
})

// Stripe Payment Intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, donorInfo, isRecurring } = req.body

    // Validate amount
    if (!amount || amount < 50) {
      return res.status(400).json({ error: 'Minimum donation amount is $0.50' })
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        donor_name: donorInfo?.name || 'Anonymous',
        donor_email: donorInfo?.email || '',
        is_recurring: isRecurring || false,
        campaign: 'HBCU Heroes Scholarship Fund'
      },
      description: `Donation to HBCU Heroes - ${donorInfo?.name || 'Anonymous'}`
    })

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    })
  } catch (error) {
    console.error('Stripe payment intent error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Stripe Subscription (for recurring donations)
app.post('/api/create-subscription', async (req, res) => {
  try {
    const { amount, donorInfo, paymentMethodId } = req.body

    if (!amount || amount < 50) {
      return res.status(400).json({ error: 'Minimum monthly donation is $0.50' })
    }

    // Create or retrieve customer
    let customer
    if (donorInfo?.email) {
      const existingCustomers = await stripe.customers.list({
        email: donorInfo.email,
        limit: 1
      })

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0]
      } else {
        customer = await stripe.customers.create({
          email: donorInfo.email,
          name: donorInfo.name,
          payment_method: paymentMethodId,
          invoice_settings: {
            default_payment_method: paymentMethodId
          }
        })
      }
    } else {
      customer = await stripe.customers.create({
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId
        }
      })
    }

    // Create product and price (you may want to cache these)
    const product = await stripe.products.create({
      name: 'HBCU Heroes Monthly Donation',
      description: 'Monthly recurring donation to HBCU Heroes Scholarship Fund'
    })

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(amount * 100),
      currency: 'usd',
      recurring: {
        interval: 'month'
      }
    })

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      metadata: {
        donor_name: donorInfo?.name || 'Anonymous',
        campaign: 'HBCU Heroes Scholarship Fund'
      }
    })

    res.json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent?.client_secret
    })
  } catch (error) {
    console.error('Stripe subscription error:', error)
    res.status(500).json({ error: error.message })
  }
})

// PayPal Create Order
app.post('/api/paypal/create-order', async (req, res) => {
  try {
    const { amount, donorInfo } = req.body

    if (!amount || amount < 1) {
      return res.status(400).json({ error: 'Minimum donation amount is $1.00' })
    }

    const request = new paypal.orders.OrdersCreateRequest()
    request.prefer('return=representation')
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        description: 'HBCU Heroes Scholarship Fund Donation',
        amount: {
          currency_code: 'USD',
          value: amount.toFixed(2)
        },
        custom_id: donorInfo?.email || 'anonymous'
      }],
      application_context: {
        brand_name: 'HBCU Heroes',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.CLIENT_URL}/donation-success`,
        cancel_url: `${process.env.CLIENT_URL}/donation-cancelled`
      }
    })

    const order = await paypalClient.execute(request)
    res.json({ orderID: order.result.id })
  } catch (error) {
    console.error('PayPal create order error:', error)
    res.status(500).json({ error: error.message })
  }
})

// PayPal Capture Order
app.post('/api/paypal/capture-order', async (req, res) => {
  try {
    const { orderID } = req.body

    const request = new paypal.orders.OrdersCaptureRequest(orderID)
    request.requestBody({})

    const capture = await paypalClient.execute(request)
    res.json({
      success: true,
      order: capture.result
    })
  } catch (error) {
    console.error('PayPal capture order error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Get Stripe public key
app.get('/api/config/stripe', (req, res) => {
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Stripe: ${process.env.STRIPE_SECRET_KEY ? '✓ Configured' : '✗ Not configured'}`)
  console.log(`PayPal: ${process.env.PAYPAL_CLIENT_ID ? '✓ Configured' : '✗ Not configured'}`)
})


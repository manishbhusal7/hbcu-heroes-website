import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import WhereYourGiftGoes from './components/WhereYourGiftGoes/WhereYourGiftGoes'
import HowItWorks from './components/HowItWorks/HowItWorks'
import StudentStories from './components/StudentStories/StudentStories'
import Impact from './components/Impact/Impact'
import UncleNearestStory from './components/UncleNearestStory/UncleNearestStory'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import Donate from './components/Donate/Donate'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <WhereYourGiftGoes />
      <HowItWorks />
      <StudentStories />
      <Impact />
      <UncleNearestStory />
      <Partners />
      <Contact />
      <Donate />
      <Footer />
    </>
  )
}

export default App


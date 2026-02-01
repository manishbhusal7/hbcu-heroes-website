//  We can modify based on our partner for now its a mock data 
export const partnerAccountsData = [
  {
    id: 1,
    accountName: "Whiskey & Oak Bar",
    city: "Nashville",
    state: "TN",
    address: "123 Broadway Street",
    zipCode: "37203",
    accountType: "Bar",
    premiseType: "On-Premise",
    contactName: "John Smith",
    phone: "(615) 555-0100",
    email: "contact@whiskeyandoak.com"
  },
  {
    id: 2,
    accountName: "Southern Spirits Lounge",
    city: "Memphis",
    state: "TN",
    address: "456 Beale Street",
    zipCode: "38103",
    accountType: "Club/Lounge",
    premiseType: "On-Premise",
    contactName: "Sarah Johnson",
    phone: "(901) 555-0200",
    email: "info@southernspirits.com"
  },
  {
    id: 3,
    accountName: "Premium Liquors Store",
    city: "Atlanta",
    state: "GA",
    address: "789 Peachtree Road",
    zipCode: "30308",
    accountType: "Liquor Store",
    premiseType: "Off-Premise",
    contactName: "Michael Davis",
    phone: "(404) 555-0300",
    email: "sales@premiumliquors.com"
  },
  {
    id: 4,
    accountName: "The Heritage Restaurant",
    city: "Charleston",
    state: "SC",
    address: "321 King Street",
    zipCode: "29401",
    accountType: "Restaurant",
    premiseType: "On-Premise",
    contactName: "Emily Williams",
    phone: "(843) 555-0400",
    email: "reservations@heritagerestaurant.com"
  },
  {
    id: 5,
    accountName: "Jazz & Bourbon Club",
    city: "New Orleans",
    state: "LA",
    address: "567 Bourbon Street",
    zipCode: "70130",
    accountType: "Club/Lounge",
    premiseType: "On-Premise",
    contactName: "Robert Brown",
    phone: "(504) 555-0500",
    email: "info@jazzbourbon.com"
  },
  {
    id: 6,
    accountName: "Urban Spirits Market",
    city: "Houston",
    state: "TX",
    address: "890 Main Street",
    zipCode: "77002",
    accountType: "Store/Chain",
    premiseType: "Off-Premise",
    contactName: "Jennifer Martinez",
    phone: "(713) 555-0600",
    email: "manager@urbanspirits.com"
  },
  {
    id: 7,
    accountName: "The Capitol Tavern",
    city: "Washington",
    state: "DC",
    address: "456 Pennsylvania Ave",
    zipCode: "20004",
    accountType: "Bar",
    premiseType: "On-Premise",
    contactName: "David Thompson",
    phone: "(202) 555-0700",
    email: "contact@capitoltavern.com"
  },
  {
    id: 8,
    accountName: "Magnolia Fine Dining",
    city: "Birmingham",
    state: "AL",
    address: "234 20th Street",
    zipCode: "35203",
    accountType: "Restaurant",
    premiseType: "On-Premise",
    contactName: "Patricia Wilson",
    phone: "(205) 555-0800",
    email: "dining@magnoliafinedining.com"
  },
  {
    id: 9,
    accountName: "Riverside Event Venue",
    city: "Louisville",
    state: "KY",
    address: "678 River Road",
    zipCode: "40202",
    accountType: "Venue/Theatre",
    premiseType: "On-Premise",
    contactName: "Christopher Anderson",
    phone: "(502) 555-0900",
    email: "events@riversidevenueky.com"
  },
  {
    id: 10,
    accountName: "Crown Spirits Retail",
    city: "Charlotte",
    state: "NC",
    address: "901 Trade Street",
    zipCode: "28202",
    accountType: "Liquor Store",
    premiseType: "Off-Premise",
    contactName: "Michelle Lee",
    phone: "(704) 555-1000",
    email: "sales@crownspiritsretail.com"
  }
]

/**
 
 * 
 * @param {Array} data - Array of partner account objects from Excel
 * @returns {Array} - Formatted partner accounts data
 */
export const importPartnerAccounts = (data) => {
  return data.map((account, index) => ({
    id: account.id || index + 1,
    accountName: account['Account Name'] || account.accountName || '',
    city: account['City'] || account.city || '',
    state: account['State'] || account.state || '',
    address: account['Street Address'] || account.address || '',
    zipCode: account['Zip Code'] || account.zipCode || '',
    accountType: account['Account Type'] || account.accountType || '',
    premiseType: account['On/Off Premise?'] || account.premiseType || '',
    contactName: account['Buyer/Manager Name (First & Last)'] || account.contactName || '',
    phone: account['Buyer/Manager Phone Number:'] || account.phone || '',
    email: account['Buyer/Manager Email:'] || account.email || ''
  }))
}

/**
 * Get unique states from partner accounts
 * Useful for filter dropdowns
 */
export const getUniqueStates = () => {
  const states = partnerAccountsData.map(account => account.state)
  return [...new Set(states)].sort()
}

/**
 * Get unique cities from partner accounts
 * Useful for filter dropdowns
 */
export const getUniqueCities = () => {
  const cities = partnerAccountsData.map(account => account.city)
  return [...new Set(cities)].sort()
}

/**
 * Search partner accounts by city and/or state
 */
export const searchPartnerAccounts = (city = '', state = '') => {
  return partnerAccountsData.filter(account => {
    const cityMatch = city === '' || 
      account.city.toLowerCase().includes(city.toLowerCase())
    const stateMatch = state === '' || 
      account.state.toLowerCase().includes(state.toLowerCase())
    return cityMatch && stateMatch
  })
}

export default partnerAccountsData

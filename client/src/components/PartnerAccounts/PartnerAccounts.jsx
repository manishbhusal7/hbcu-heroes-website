import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, LocationOn, Business, Phone, Email } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import partnerAccountsData from '../../utils/partnerAccountsData'
import './PartnerAccounts.css'

const PartnerAccounts = () => {
  const [searchCity, setSearchCity] = useState('')
  const [searchState, setSearchState] = useState('')
  const [partnerAccounts] = useState(partnerAccountsData)

  // Filter accounts based on search criteria
  const filteredAccounts = useMemo(() => {
    return partnerAccounts.filter(account => {
      const cityMatch = searchCity === '' || 
        account.city.toLowerCase().includes(searchCity.toLowerCase())
      const stateMatch = searchState === '' || 
        account.state.toLowerCase().includes(searchState.toLowerCase())
      return cityMatch && stateMatch
    })
  }, [partnerAccounts, searchCity, searchState])

  const handleClearSearch = () => {
    setSearchCity('')
    setSearchState('')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <Section id="partner-accounts">
      <Container>
        <SectionHeading
          eyebrow="Find a Partner"
          title="Partner Accounts Supporting HBCU Heroes"
          lead="These establishments are proud partners of the Uncle Nearest HBCU Challenge. Visit them and support their commitment to HBCU students."
        />

        <motion.div 
          className="partner-accounts-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Search Section */}
          <motion.div className="search-section" variants={itemVariants}>
            <div className="search-container">
              <div className="search-field">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by city..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="search-field">
                <LocationOn className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by state (e.g., TN)..."
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  maxLength="2"
                  className="search-input"
                />
              </div>
              {(searchCity || searchState) && (
                <button onClick={handleClearSearch} className="clear-btn">
                  Clear
                </button>
              )}
            </div>
            <div className="search-results-count">
              <p>Showing {filteredAccounts.length} partner account{filteredAccounts.length !== 1 ? 's' : ''}</p>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div 
            key={`results-${searchCity}-${searchState}`}
            className="accounts-grid" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredAccounts.length > 0 ? (
              filteredAccounts.map((account) => (
                <motion.div
                  key={account.id}
                  className="account-card"
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="account-header">
                    <Business className="account-icon" />
                    <div className="account-type-badges">
                      <span className="badge badge-type">{account.accountType}</span>
                      <span className="badge badge-premise">{account.premiseType}</span>
                    </div>
                  </div>
                  
                  <h3 className="account-name">{account.accountName}</h3>
                  
                  <div className="account-details">
                    <div className="detail-item">
                      <LocationOn className="detail-icon" />
                      <div className="detail-text">
                        <p>{account.address}</p>
                        <p>{account.city}, {account.state} {account.zipCode}</p>
                      </div>
                    </div>
                    
                    {account.contactName && (
                      <div className="detail-item">
                        <Business className="detail-icon" />
                        <div className="detail-text">
                          <p>{account.contactName}</p>
                        </div>
                      </div>
                    )}
                    
                    {account.phone && (
                      <div className="detail-item">
                        <Phone className="detail-icon" />
                        <div className="detail-text">
                          <a href={`tel:${account.phone}`}>{account.phone}</a>
                        </div>
                      </div>
                    )}
                    
                    {account.email && (
                      <div className="detail-item">
                        <Email className="detail-icon" />
                        <div className="detail-text">
                          <a href={`mailto:${account.email}`}>{account.email}</a>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div className="no-results" variants={itemVariants}>
                <Search className="no-results-icon" />
                <h3>No partner accounts found</h3>
                <p>Try adjusting your search criteria</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default PartnerAccounts

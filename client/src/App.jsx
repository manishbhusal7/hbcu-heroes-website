import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import UncleNearestStory from './components/UncleNearestStory/UncleNearestStory'
import Mission from './components/Mission/Mission'
import Impact from './components/Impact/Impact'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhereYourGiftGoes from './components/WhereYourGiftGoes/WhereYourGiftGoes'
import StudentStories from './components/StudentStories/StudentStories'
import ProvenPartnership from './components/ProvenPartnership/ProvenPartnership'
import Leadership from './components/Leadership/Leadership'
import Partners from './components/Partners/Partners'
import Donate from './components/Donate/Donate'
import Contact from './components/Contact/Contact'
import VideoSection from './components/VideoSection/VideoSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <UncleNearestStory />
      <Mission />
      <ProvenPartnership />
      <Impact />
      <HowItWorks />
      <WhereYourGiftGoes />
      <StudentStories />
      <Leadership />
      <Partners />
      <Donate />
      <Contact />
      <VideoSection />
      <Footer />
    </>
  )
}

export default App


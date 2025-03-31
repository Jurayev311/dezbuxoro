import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import InfoMessage from './components/InfoMessage/InfoMessage'
import Services from './components/services/Services'
import Affair from './components/affair/Affair'
import Info from './components/info/Info'
import Faq from './components/faq/Faq'
import Support from './components/support/Support'
import Footer from './components/footer/Footer'
import Message from './components/message/Message'

function App() {

  return (
    <>
      <Header />
      <Message />
      <Hero />
      <About />
      <InfoMessage />
      <Services />
      <Affair />
      <Info />
      <Faq />
      <Support />
      <Footer />
    </>
  )
}

export default App

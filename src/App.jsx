import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  const [count, setCount] = useState(0)

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

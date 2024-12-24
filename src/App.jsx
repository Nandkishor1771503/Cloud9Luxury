import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Customers from './components/Customers'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    // 
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Customers />
      <Footer />
    </>
  )
}

export default App

import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  
  return (
    <div className='bg-white dark:bg-black min-h-screen transition-colors'>
      <Toaster />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App

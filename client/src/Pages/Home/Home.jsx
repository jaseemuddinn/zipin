import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Design from '../../Components/Design/Design'
import Services from '../../Components/Services/Services'
import Stats from '../../Components/CoreValues/CoreValues'
import Approach from '../../Components/Approach/Approach'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className='bg-neutral-900'>
        <Navbar />
        <Hero />
        <Design />
        <Services />
        <Stats />
        <Approach />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
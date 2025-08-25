import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Rating from '../Components/Rating'
import Benefits from '../Components/Benefits'
import Products from '../Components/Products'
const LandingPage = () => {
  return (
    <section className='bg-[#45553d]'>
    <Navbar/>
    <Hero/>
    <Rating/>
    <Benefits/>
    <Products  />
    </section>
  )
}

export default LandingPage
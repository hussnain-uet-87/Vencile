import React from 'react'
import heroImg from "../assets/images/hero-img.png"

const Hero = () => {
  return (
    <section className='w-full min-h-[580px] bg-[#e8f2e9] flex flex-col sm:flex-row items-center justify-around lg:justify-center'>
        <div className='text-[#45553d] px-[20px] sm:px-[60px]'>
            <p className='opacity-80 uppercase text-sm '>Free Delivery WorldWide</p>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Feed Your Skin, <br /> Find Your Glow.</h1>
            <h4 className='my-3 font-medium'>Natural Inner Beauty</h4>
            <p className='font-medium max-w-[530px] pb-4 border-b-1 border-b-[#45553d]'>Enhance Your Radiance with Clean, Science-driven Skincare, Cruelty-Free, Sustainable and Enhanced with Antioxidants for Healty, Timeless Skin.</p>
            <button className='mt-4 mb-4 bg-[#45553d] text-white px-6 py-3 hover:opacity-80 duration-200'>Order Now</button>
        </div>
        <img className='-order-1 sm:order-1 w-[200px] sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[420px] xl:mt-[-50px] drop-shadow-lg max-w-[500px]' src={heroImg} alt="" />

    </section>
  )
}

export default Hero
import React from 'react'
import {RiStarFill,RiStarHalfLine} from "react-icons/ri" 
const Rating = () => {
  return (
    <section id='rating' className='w-full max-w-7xl flex sm:flex-row flex-col mt-10 py-10 px-4 items-center gap-4 justify-between bg-[#45553d]  sm:px-[100px]'>
        <h2 className='text-white w-[180px] sm:w-full mb-4 mt-[-25px] sm:mb-0 text-lg sm:text-2xl'>Trusted by 10,000+ Customers, <br /> Worldwide since 2018.</h2>
        <div className='flex flex-col sm:flex-row gap-[20px]'>
            <div className='p-5 border-2 border-neutral-400 text-white'>
                <h2 className='text-5xl text-center mb-2'>4.8</h2>
                <div className='flex items-center justify-center text-yellow-400'>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarFill/>
                <RiStarHalfLine/>
                </div>
               <p>Average Rating</p> 
            </div>
            <div className='p-5 border-2 border-neutral-400 text-white'>
                <h2 className='text-5xl text-center mb-2'>1.7M</h2>
                <p>Worth Products Sold</p>
            </div>
        </div>
    </section>
  )
}

export default Rating
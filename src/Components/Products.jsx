import React from 'react'
import { RiPaintLine,RiContrastDrop2Line, RiCoinLine, RiSunLine, RiInkBottleLine } from 'react-icons/ri'

const Products = () => {
  return (
    <section className='w-full px-10 py-12 bg-white'>
        <h2 className='text-4xl text-center mb-10'>Check Out Our Products</h2>
        <div className='flex items-center text-[#45553d]  justify-center gap-[80px]'>
            <div>
            <div className='h-[100px] w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center '>
                <RiPaintLine className='text-5xl'/>
            </div>
            <p className='text-center font-semibold mt-2 text-xl hover:cursor-pointer'>Cream</p>
            </div>
            <div>
            <div className='h-[100px] w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center '>
                <RiContrastDrop2Line className='text-5xl'/>
            </div>
            <p className='text-center font-semibold mt-2 text-xl hover:cursor-pointer'>Serum</p>
            </div>
            <div>
            <div className='h-[100px] w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center '>
                <RiCoinLine className='text-5xl'/>
            </div>
            <p className='text-center font-semibold mt-2 text-xl hover:cursor-pointer'>Lotion</p>
            </div>
            <div>
            <div className='h-[100px] w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center '>
                <RiSunLine className='text-5xl'/>
            </div>
            <p className='text-center font-semibold mt-2 text-xl hover:cursor-pointer'>Sunscreen</p>
            </div>
            <div>
            <div className='h-[100px] w-[100px] rounded-full bg-[#e8f2e9] flex items-center justify-center '>
                <RiInkBottleLine className='text-5xl'/>
            </div>
            <p className='text-center font-semibold mt-2 text-xl hover:cursor-pointer'>Oil</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-10 '>
            <button className='px-8 py-2 bg-[#45553d] text-[#e8f2e9] hover:cursor-pointer text-lg'>View Collection</button>
            </div>
    </section>
  )
}

export default Products
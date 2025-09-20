import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ProductsNavBar = () => {
  return (
    <div className='z-100 fixed top-0 max-w-7xl w-full bg-[#32382c] text-[#e8f2e9] py-3 flex items-center justify-between px-10'>
        
    <h2 className='text-xl font-bold tracking-wide flex gap-2'>Vencile Products</h2>
    <div className='flex gap-2 items-center'>
      <Link to="/products/cart">< RiShoppingCart2Line className='text-2xl'/></Link>
    </div>
    </div>
  )
}

export default ProductsNavBar
import React from 'react';
import {FaSearch} from "react-icons/fa"

function Header() {
  return (
    <div className=' bg-b1 h-[99px]  pl-[305px] flex items-center '>
        <div className='flex items-center bg-white p-2  rounded-3xl border border-b4'>
            <input type="text" placeholder='Search for items, categories' className='w-[687px] pl-4 focus:outline-none' />
            <button className=' bg-b3  text-white p-2 rounded-full '><FaSearch  className=' text-xs'/></button>
        </div>
    </div>
  )
}

export default Header
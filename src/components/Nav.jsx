import React from 'react';
import {FaSistrix, FaAngleDown} from "react-icons/fa";
import {BiHeart} from "react-icons/bi";
import {BsCart3, BsPerson} from "react-icons/bs";


function Nav() {
  return (
    <div className=' bg-b1 h-[99px]  pl-[305px] flex items-center gap-8 shadow-md'>

      {/* input and search bar  */}
      <div className='flex items-center bg-white p-2  rounded-3xl border-[0.5px] border-b4'>
          <input type="text" placeholder='Search for items, categories' className='w-[687px] pl-4 focus:outline-none ' />
          <button className=' bg-b3  text-white p-2 rounded-full hover:bg-b4'><FaSistrix  /></button>
      </div>

      {/* Account button*/}
      <button className=' flex items-center gap-2 hover:underline'>
        <BsPerson />
        Account
        <FaAngleDown />
      </button>

       {/* Wishlist button */}
       <button className=' flex items-center gap-2 hover:underline'>
        <BiHeart />
        Wish-list
      </button>

       {/* account buttons */}
       <button className=' flex items-center gap-2 hover:underline'>
        <BsCart3 />
        Cart
      </button>

    </div>
  )
}

export default Nav;
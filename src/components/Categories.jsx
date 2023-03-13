import React from 'react'
import {FaAngleRight} from "react-icons/fa"
import phone from "../assets/phoneImg.png"

function Categories() {
  return (
    <div>
        <div className = " grid gap-8  grid-cols-6">

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>

            <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between'>
                <h1>Phones & Tablets</h1>
                <div className='flex justify-between items-center '>
                    <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                    <img src={phone} alt="phone"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Categories
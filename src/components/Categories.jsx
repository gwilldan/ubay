import React from 'react'
import {FaAngleRight} from "react-icons/fa"
import phone from "../assets/phoneImg.png"

function Categories() {

    const list = [1,2,3,4,5,6]

  return (
    <div>
        <div className = " grid gap-8  grid-cols-6">

            {/* renders the cards throw a map of items on the list */}

            { 
                list.map(() => <div className=' px-4 py-2 bg-white rounded-xl w-[196px] h-[96px] flex flex-col justify-between hover:shadow-md cursor-pointer'>
                    <h1>Phones & Tablets</h1>
                    <div className='flex justify-between items-center'>
                        <div className=' p-1 bg-b2 text-white rounded-full'><FaAngleRight /></div>
                        <img src={phone} alt="phone"/>
                    </div>
                    </div>
                )
            }
            
        </div>
    </div>
  )
}

export default Categories
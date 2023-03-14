import React from 'react';
import mac from "../assets/macbook.png";
import {BsHeart} from "react-icons/bs";
import {MdOutlineBookOnline, MdStarRate} from "react-icons/md";

function TopDeals() {

    const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    return (

        <div className = " grid gap-8 grid-cols-6 justify-items-center">

            {/* renders the cards throw a map of items on the list */}

        {
            list.map(() => <div className=' bg-white rounded-xl w-[172px] h-[232px] flex flex-col justify-between p-2 hover:shadow-md cursor-pointer'>
            <img src={mac} alt="mac" />
            <div className=' bg-white'>
                <h2 className=' font-bold text-sm'>Macbook Air 2020</h2>
                <h3 className=' text-xs'>$2099.99</h3>
                <div className=' flex items-center justify-between'>
                    <div className=' flex text-b3 m-1'>
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                        <MdStarRate />
                    </div>
                    <div className=' text-b3  font-extrabold'><BsHeart /></div>
                </div>
            </div>
        </div>)
        }    
    
        </div>
    )
  
}

export default TopDeals
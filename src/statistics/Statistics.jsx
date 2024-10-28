import React from 'react'
import Navbar from '../navbar/Navbar'
import { CiClock1 } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";

function Statistics() {
  return (
<div className='bg-gray-400 h-[100vh]'>
    <Navbar/>
    <div className=' text-red-500 flex items-center justify-evenly gap-4 p-10 shadow-2xl rounded-2xl bg-gray-100 m-16 h-[50vh]  '>
    
            <div className=" flex  flex-col items-center text-red-500 clock">
            <CiClock1 className='text-4xl' />
            <h3 className='text-lg py-2'>عدد الساعات الحجوز اليوم</h3>
            <p>167 ساعة</p>
            </div>
            <div className=" flex  flex-col items-center text-red-500 money"><MdOutlineAttachMoney className='text-4xl' />
            <h3 className='text-lg py-2'>حصيلة اليوم</h3>
            <p>386,500 ليرة</p>
            </div>
            <div className=" flex  flex-col items-center text-red-500 ppl">
            <FaPerson className='text-4xl' />
            <h3 className='text-lg py-2'>عدد الطلاب الذين حجزوا</h3>
            <p>216 طالب</p>
        </div>
    </div>
</div>
  )
}

export default Statistics

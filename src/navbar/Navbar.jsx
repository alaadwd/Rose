import React from 'react'
import { GiRose } from "react-icons/gi";
import "./Navbar.css";
import { MdOutlineQueryStats } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-red-500 flex items-center justify-between shadow-2xl p-5'>
        <div className="logo pl-14 ">
            <h4 className='text-lg gap-1 flex items-center ' >Rosy <GiRose className='inline' /> </h4>
        </div>
        <Link to={'/Statistics'}  className=" hover:text-red-200 hover:cursor-pointer transition pr-14 stats flex justify-center items-center gap-1">
            <h4>الاحصائيات</h4>
            <MdOutlineQueryStats className='inline' />
        </Link>
    </nav>
  )
}

export default Navbar

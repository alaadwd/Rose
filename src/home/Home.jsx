import React from 'react';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import './Home.css';
import { FaRegTrashCan } from "react-icons/fa6";
import Navbar from '../navbar/Navbar';


function Home() {

    const [openModal,setOpenModal] = useState(false);
    const [resName,setResName]= useState('');
    const [resNo,setResNo] = useState(0);
    const [internet,SetInternet] = useState(false);
    const [drinkType,setDrinkType]= useState('');
    const [drinkNo,setDrinkNo]= useState(0);
    const [drinkTotal,setdrinkTotal] = useState([]);
    const [entry,setEntry] = useState({
      resName:'',
      resNo: 0,
      internet: false,
      drinkType : '',
      drinkNo: 0,
    });
    const [allEntries,setAllEntries] = useState([])
    const allEntriesMapped = allEntries.map((entry) => { 
      return (
        <div className="text-red-500 entry">
          <h2>{entry.resName}</h2>
          <h3>{entry.resNo}</h3>
          <h3>{Date}</h3>
        </div>
      )
    })
    const drinksMapped = drinkTotal.map((drink) =>{
      return (
          <li className='flex justify-center items-center'>
          <span className='px-2' > عدد : {drink.no} </span>
            {drink.drink}
          <button className='hover:text-red-400 transition pl-3'>
          <FaRegTrashCan />
          </button>
          </li>

      )
    })
    
    function makeEntry(){
      setAllEntries([...allEntries,{
        resName: resName,
        resNo: resNo,
        internet : internet,
        drinkType : drinkType,
        drinkNo: drinkNo
      }])
      // if(!entry)(
      // )
      console.log(allEntries)
    }

    function drinkSubmit(e){
      
      setdrinkTotal([...drinkTotal,{drink:drinkType,
        no:drinkNo,}])
      setDrinkNo(0)
      setDrinkType('')
      e.preventDefault()
    }

    const modalOpen = () => {
        setOpenModal(true);
    }   
    const modalClose = () => {
        setOpenModal(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        modalClose();
    }

  return (
      // <div className="container flex flex-col justify-center">
    <div className=' flex justify-center flex-col items-center gap-4 p-10 shadow-2xl rounded-2xl bg-gray-100 m-24  '>
      <h3 className='text-red-400 text-3xl'>أدخل حجز جديد</h3>
      <button className='entry text-black' onClick={modalOpen}><FaPlus className='hover:text-red-400 transition text-red-500 plus'/></button>
       {/* Modal */}
       {openModal && (
        <div className=" modal text-center text-red-500">
          <div className=" modal-content">
            {/* Close button */}
            <span className="close" onClick={modalClose}>&times;</span>
            {/* Form content */}
            <form onSubmit={handleSubmit} className='flex flex-col' >
              {/* Form fields */}
              <label htmlFor="name">أسم الحجز:</label>
              <input 
              className='form-input m-5 bg-gray-100 rounded-t-md p-1 ' 
              value={resName}
              onChange={(e)=>{setResName(e.target.value)}}
              placeholder='أسم صاحب الحجز' type="text" id="name" name="name" autoComplete='false' />
              <label htmlFor="number">عدد الطلاب</label>
              <input className='form-input m-5 bg-gray-100 rounded-t-md p-1 ' 
              value={resNo}
              onChange={(e)=>{setResNo(e.target.value)}}
              placeholder='عدد الطلاب' type="number" id="students-no" name="students-no" autoComplete='false' />
              
              
              
              {/* Submit button */}
              {/* Internet */}
              <div className=" p-2 internet flex items-center justify-center gap-2">
                <input checked={internet} onChange={(e) => {SetInternet(prev => !prev)}} type="checkbox" name='internet'/>
                <label htmlFor="internet">مع أنترنت</label>
              </div>
              {/* Drinks */}

              <label className='pb-4 block' htmlFor="drinks">
                أضف مشروبات
              </label>
              <ol  className=" flex 
              flex-col
              justify-center items-center gap-1
              displayDrinks">
                {drinksMapped}
              </ol>
              <div className="drinks flex justify-center items-center">
              <select
                value={drinkType}
                onChange={(e)=>{setDrinkType(e.target.value)}}
                className='border-red-400 border-[0.5px] rounded-md' name="drinks" id="drinks">
                  <option value="nothing">لا شيء</option>
                  <option value="قهوة">قهوة</option>
                  <option value="شاي">شاي</option>
                  <option value="نسكافيه">نسكافيه</option>
                  <option value="شاي أخضر">شاي أخضر</option>
                </select>
                <input className='form-input m-5 bg-gray-100 rounded-t-md p-1 ' placeholder='عدد '
                value={drinkNo}
                onChange={(e)=>{setDrinkNo(e.target.value)}}
                type="number" id="drinks-no" name="drinks-no" autoComplete='false' />
                <button onClick={drinkSubmit} className='transition hover:bg-red-500 hover:text-white border-[0.5px] border-red-500 p-1 rounded-md flex flex-col items-center justify-center'>إضافة<FaPlus /></button>




              </div>
              <button onClick={makeEntry } className='hover:bg-red-500 rounded-md hover:text-white transition border-[0.5px] m-3 border-red-500 ' type="submit" 
              // onSubmit={Alerty()}

              > أدخل</button>
            </form>
          </div>
        </div>
      )}           
    </div>
              // <div className="entries">
              // {allEntriesMapped}
        
              // </div>
    // </div>
  )
}

export default Home

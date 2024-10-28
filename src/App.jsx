import { useState } from 'react'
import './App.css'
import "./tailwind.css"
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import { Routes , Route } from 'react-router-dom';
function App() {


  return (
    <div className='bg-gray-400 h-[100vh]'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App

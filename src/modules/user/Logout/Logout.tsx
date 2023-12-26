import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../../../ui/layout/Navbar/Navbar'
import './Logout.scss'
const Logout = () => {
  const deleteToken =()=>{
    localStorage.setItem("isAuthenticated", "false")
    localStorage.removeItem("user")
    localStorage.removeItem("gender")
}
const navigate=useNavigate()
    const handleClose=()=>{
        navigate(-1)
    }  
  return (
    <>
    <Navbar/>
    <div className='logout'>
        <div className='heading'><h3>Are you sure you want to logout</h3></div>
        <NavLink to={'/'}><button className='button1' onClick={deleteToken}>Yes</button></NavLink>
        <button className='button2' onClick={handleClose}>No</button>
    </div>
    </>
  )
}

export default Logout
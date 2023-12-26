import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../ui/layout/Navbar/Navbar'

const PageNotFound = () => {
  return (
    <>
    <Navbar/>
    <div>
        <h3>Page not found!!</h3>
       <NavLink to={'/home'}> <button>Back to home</button></NavLink>
    </div>
    </>
  )
}

export default PageNotFound
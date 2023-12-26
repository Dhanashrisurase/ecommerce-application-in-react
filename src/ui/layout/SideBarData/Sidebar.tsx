
import React from 'react'
import SideBarData from './SideBarData'
import SidebarLink from './Sidebarlink'
import './Sidebar.scss'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* <img className='img' src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png" alt="" /> */}
        {
            SideBarData.map((item,index)=>{return<SidebarLink key={index} item={item}/>})
        }
    </div>
  )
}

export default Sidebar
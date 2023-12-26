import React, { useState } from "react";
import Sidebar from "../SideBarData/Sidebar";
import "./navbar.scss";
import { FcMenu } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import Account from "../../../modules/user/Account/Account";
const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    
  };
  const data = localStorage.getItem("username");
  const user = data ?? "";
  const gender = localStorage.getItem("gender");
  return (
    <nav className="navbar">
      <div>
        <FcMenu
          style={{ fontSize: "1.5em", marginLeft: "1rem" }}
          onClick={handleToggleSidebar}
        />
      </div>
      <img
        className="logo"
        src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-1024.png"
        alt=""
      />
      <div className={`navbar__sidebar ${showSidebar ? "show" : ""}`}>
        <IoIosCloseCircleOutline
          style={{ fontSize: "1.5em", color: "red", marginRight: "-9.5rem" }}
          onClick={handleToggleSidebar}
        />
        <Sidebar />
      </div>
      <div className="tabs">
        <NavLink to={"/home"}>
          
          <p className="tabs_text">Home</p>
        </NavLink>
        <NavLink to={"/contactUs"}>
          <p className="tabs_text">Contact Us</p>
        </NavLink>
        <i style={{ marginLeft: "38rem" }}>
          <BiMessageRounded className="tabs_icons" />
        </i>
        <i>
          <IoNotificationsOffOutline className="tabs_icons" />
        </i>
        <p className="tabs_text">Welcome Back, {user}</p>
        {gender === "female" ? (
          <img
            src="https://www.yellow.com.au/wp-content/uploads/2018/10/YEL160_Jan-Avatar-Grey.png"
            className="tabs_img"
            alt="female_user_profile"
          ></img>
        ) : (
          <img
            src="https://cdn3.iconfinder.com/data/icons/avatar-vol-1-1/512/1-512.png"
            className="tabs_img"
            alt="male_user_profile"
          ></img>
        )}
      </div>
      <Account />
      <NavLink to={"/cart"}>
      <GiShoppingCart className="tabs_img" />
      <div className="tab_num" style={{color:'white', height:'1.5rem', width:'1.5rem'}}></div>
      </NavLink>
    </nav>
  );
};
export default Navbar;


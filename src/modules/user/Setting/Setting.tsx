import React from "react";
import { NavLink } from "react-router-dom";
import  "./Setting.scss";

function  Setting() {
  return (
    <div className="ProfileLeftDiv">
      <h3 className="ProfileLefthead"> Pofile Setting </h3>
      <div className="leftItems">
        <NavLink to={"/profile/setting"}>Account</NavLink>
      </div>
      <div className="leftItems">
        <NavLink to={"/password"}>Password</NavLink>{" "}
      </div>
      <div className="leftItems">
        <NavLink to={"/deleteAccount"}>Delete account</NavLink>
      </div>
    </div>
  );
}

export default  Setting;







import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from "../../../ui/layout/Navbar/Navbar";
import  "./Profile.scss";

const Profile = () => {
  const handleFollow = () => {
    
  };

  const handleMessage = () => {
    
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="profile">
      <div className="profile-details">
        <img
          className="profile-avatar"
          src="https://www.yellow.com.au/wp-content/uploads/2018/10/YEL160_Jan-Avatar-Grey.png"
          alt="Profile Avatar"
        />
       
        <div className="profile-info">
          <h2 className="profile-name">Dhanashri</h2>
          <p className="profile-skills">Skills: React, TypeScript, SCSS</p>
          <p className="profile-about">
            about
          <p className="profile-location">pune</p>
          </p>
        </div>
      </div>
      <div className="profile-buttons">
        <button className="follow-button" onClick={handleFollow}>
          Follow
        </button>
        <button className="message-button" onClick={handleMessage}>
          Message
        </button>
      </div>
    </div>
    </>
  );
};

export default Profile;





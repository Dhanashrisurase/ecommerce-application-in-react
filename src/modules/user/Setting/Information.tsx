import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import Navbar from "../../../ui/layout/Navbar/Navbar";
import './Setting.scss'; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
 import Setting from './Setting';

const notify = (text: string) => toast(text);

interface User {
  email: string;
  password: string;
  name: string;
}

const Information: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [updatedName, setUpdatedName] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      axios.get(`http://localhost:3002/users?email=${email}`).then((response) => {
        setUser(response.data[0]);
      });
    }
  }, []);

  const handleNameChange = async () => {
    try {
      if (updatedName && updatedName.length > 0) {
        const response = await axios.get(`http://localhost:3002/users?email=${user?.email}`);
        const userToUpdate = response.data[0];
        const updatedUser = { ...userToUpdate, name: updatedName };
        notify("Updated successfully!");
        setTimeout(async () => {
        await axios.put(`http://localhost:3002/users/${userToUpdate.id}`, updatedUser);
        setUser(updatedUser);
      },3000);
        
      } else {
        notify("Please enter a valid name.");
      }
    } catch (error) {
      console.error(error);
      notify("Failed to change name");
    }
    setUpdatedName('')
  };

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="SettingMain">
        <h2 className="settingHeading"></h2>
        <Setting/>
        <div className="ProfileRightDiv">
          <label className="signupLabel1">Name</label>
          <br />
          <input
            placeholder="name"
            className="input2"
            value={updatedName}
            onChange={handleNameInputChange}
          />
          <br />
          <label className="signupLabel1">Biography</label>
          <br />
          <textarea
            placeholder="Tell something about yourself"
            className="textinput"
            
          />
          <br />
          <button type="button" className="signUPBtn1" onClick={handleNameChange}>
            Save Changes
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Information;


















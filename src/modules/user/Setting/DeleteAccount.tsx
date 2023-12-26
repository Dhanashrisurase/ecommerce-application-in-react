import "./Setting.scss";
import axios from "axios";
import Setting from './Setting';
import { useNavigate } from "react-router-dom";
import Navbar from "../../../ui/layout/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text: string) => toast(text);
interface User {
  email: string;
}
const DeleteAccount = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/home");
  };

  const handleDeleteAccount = async () => {
    const email = localStorage.getItem("email");
    const response = await axios.get("http://localhost:3002/users");
    const users = response.data;
    const user = users.find((user: User) => user.email === email);

    if (user) {
      notify("Account Deleted Successfully");
      setTimeout(() => {
        axios
          .delete(`http://localhost:3002/users/${user.id}`)

          .then(() => {
            navigate("/");
          })
          .catch(() => {
            notify("Failed to delete account. Please try again later.");
          });
      }, 3000);
    } else {
      notify("Failed to delete account. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="SettingMain">
        <h2 className="settingHeading"></h2>
        <Setting/>
        <div className="ProfileRightDiv">
          <div className="DelAccRightDiv">
            <h3>Are you sure you want to delete your Account?</h3>
            <div className="DelAccBtn">
              <button className="DelAccYes" onClick={handleDeleteAccount}>
                Yes
              </button>
              <button className="DelAccNo" onClick={handleClose}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DeleteAccount;

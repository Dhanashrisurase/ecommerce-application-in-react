import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../ui/layout/Navbar/Navbar";
 import Setting from './Setting';
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './Setting.scss'; 

interface User {
  email: string;
  password: string;
}

const notify = (text: string) => toast(text);
interface PasswordChangeState {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Password: React.FC = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      axios
        .get(`http://localhost:3002/users?email=${email}`)
        .then((response) => {
          setUser(response.data[0]);
          
        });
    }
  }, []);
  const handlePasswordChange = async (
    values: PasswordChangeState,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const { currentPassword, newPassword, confirmPassword } = values;
    if (currentPassword !== user?.password) {
      notify("Current password is incorrect.");
      setSubmitting(false);
      return;
    }
    if (newPassword !== confirmPassword) {
      notify("Passwords do not match.");
      setSubmitting(false);
      return;
    }

    const updatedUser = { ...user, password: newPassword };

    try {
      if (newPassword.length > 0) {
        const response = await axios.get(
          `http://localhost:3002/users?email=${user?.email}`
        );
        const userToUpdate = response.data[0];
        await axios.put(
          `http://localhost:3002/users/${userToUpdate.id}`,
          updatedUser
        );
        notify("Password changed successfully!");
      }
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      notify("Failed to change password.");
      setSubmitting(false);
    }
    
  };

  return (
    <>
      <Navbar />
      <div className="SettingMain">
        <h2 className="settingHeading"></h2>
        <Setting/>
        <div className="ProfileRightDiv">
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              currentPassword: Yup.string().required(
                "*Current Password is required."
              ),
              newPassword: Yup.string()
                .required("*New password is required.")
                .matches(
                  /[A-Z]/,
                  "*Password must contain at least one uppercase letter."
                )
                .matches(
                  /[@$!%*#?&]/,
                  "*Password must contain at least one special character."
                )
                .matches(/\d/, "*Password must contain at least one number.")
                .min(8, "*Password must be at least 8 characters long.")
                .max(16, "*Password is Too Long!"),
              confirmPassword: Yup.string()
                .required("*Confirm password is required")
                .oneOf([Yup.ref("newPassword")], "*Passwords must match"),
            })}
            onSubmit={handlePasswordChange}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <label className="signupLabel1">Current password</label>
                <Field
                  className="ResetInput1"
                  type="password"
                  name="currentPassword"
                  error={
                    touched.currentPassword && Boolean(errors.currentPassword)
                  }
                />
                <br />
                <span> </span>
                {touched.currentPassword && errors.currentPassword && (
                  <span className="Settingerror">{errors.currentPassword}</span>
                )}
                <br />
                <label htmlFor="newPassword" className="signupLabel1">
                  New Password
                </label>
                <Field
                  className="ResetInput1"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  error={touched.newPassword && Boolean(errors.newPassword)}
                />
                <span className="ResetSpan">
                  
                  <br />
                </span>
                {touched.newPassword && errors.newPassword && (
                  <span className="Settingerror">{errors.newPassword}</span>
                )}
                <br />
                <label htmlFor="confirmPassword" className="signupLabel1">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  className="ResetInput1"
                  name="confirmPassword"
                  id="confirmPassword"
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                />
                <br />
                <span> </span>
                {touched.confirmPassword && errors.confirmPassword && (
                  <span className="Settingerror">{errors.confirmPassword}</span>
                )}
                <br />
                <div className="signUPBtn1">
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Changing Password..." : "Change Password"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Password;








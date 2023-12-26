import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./signup.scss";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  gender:string;
}

const Signup: React.FC = () => {
  const initialValues: SignupFormValues = {
    name: "",
    email: "",
    password: "",
    gender:''
  };
  interface User {
    email: string;
  }
  const navigate = useNavigate();
  const notify = (text: string) => toast(text);
  const validationSchema = Yup.object({
    name: Yup.string().matches(/^[A-Za-z\s]+$/, "Invalid name format").required("*Name is required"),
    email: Yup.string()
      .email("*Invalid email address")
      .required("*Email is required")
      .matches(/[.]/, "*email must be have one . Dot")
      .matches(/[@]/, "*email must be have one @")
      .max(80, "*Too Long!"),
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "*Password must contain at least one uppercase letter.")
      .matches(
        /[@$!%*#?&]/,
        "*Password must contain at least one special character."
      )
      .matches(/\d/, "*Password must contain at least one number.")
      .min(8, "*Password must be at least 8 characters long.")
      .max(16, "*Password is Too Long!"),
      gender:Yup.string()
  });
 
  const onSubmit = async (
    values: SignupFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {

    const fetchresponse = await fetch("http://localhost:3002/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const users: User[] = await fetchresponse.json();
    const foundUser = users.find((u) => u.email === values.email);
    if (foundUser) {
       
        notify("Email already registered");
      } else {
       const response = await axios.post("http://localhost:3002/users", values);
    console.log(response.data);
    setTimeout(() => {
      navigate("/");
    }, 5000);
    notify("User Register Successfully");
      }
    
  };
  return (
    <div>
      <h1> Get started </h1>
      <h4>
        Start creating the best possible user experience for you customers.
      </h4>
      <div className="signup">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="signUpForm">
              <div>
                <label className="signupLabel" htmlFor="name">
                  Name
                </label>
                <br />
                
                <Field className="input" type="text" name="name" />
                <br />
                <span> </span>
                <span className="error">
                  <ErrorMessage name="name" />
                </span>
              </div>

              <div>
                <label className="signupLabel" htmlFor="email">
                  Email
                </label>
                <br />
                <Field className="input" type="text" name="email" /> <br />
                <span> </span>
                <span className="error">
                  <ErrorMessage name="email" />
                </span>
              </div>

              <div>
                <label className="signupLabel" htmlFor="password">
                  Password
                </label>
                <br />
                <Field className="input" type="password" name="password" />
                <br />
                <span> </span>
                <span className="error">
                  <ErrorMessage name="password" />
                </span>
              </div>
              <div>  
                 <label className="signupLabel" htmlFor="gender">Gender</label><br /> 
                <Field className="input" as="select" name="gender">   
                <option value="">Select Gender</option>     
                <option value="male">Male</option>     
                <option value="female">Female</option>     
                <option value="other">Other</option></Field><br />
                <span> </span><span className="error">     
                <ErrorMessage name="gender" /></span> </div>
              <button
                type="submit"
                className="signUPBtn"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;







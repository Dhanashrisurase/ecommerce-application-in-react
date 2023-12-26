import React from "react";
import "./login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

interface SigninFormValues {
  email: string;
  password: string;
}
const SigninFormSchema = Yup.object().shape({
  email: Yup.string()
      .email("*Invalid email address")
      .required("*Email is required")
      .matches(/[.]/, "*email must be have one . Dot")
      .matches(/[@]/, "*email must be have one @")
      .max(80, "*Too Long!"),
  password: Yup.string().required("*Required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const notify = (text: string) => toast(text);

  interface User {
    email: string;
    password: string;
    name:string;
    gender:string;
  }

  const handleLogin = async (values: SigninFormValues) => {
    const response = await fetch("http://localhost:3002/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const users: User[] = await response.json();
    const foundUser = users.find((u) => u.email === values.email);
    if (foundUser) {
      if (foundUser.password === values.password) {
        setTimeout(() => {
          navigate("/home");
        },2000);
        // localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("email",foundUser.email)
        localStorage.setItem("username",foundUser.name)
        localStorage.setItem("gender",foundUser.gender)
        notify("SignIn Successfully");
      } else {
        notify("Enter valid Email or Password");
      }
    } else {
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
      notify("User not found. Please register first.");
    }
  };
  return (
    <div>
      <h1>Welcome back </h1>
      <h4>Sign into your account to continue.</h4>
      <div className="signup">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SigninFormSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="signUpForm">
              <div>
                <label className="signupLabel">Email</label>
                <br />
                <Field type="text" className="input" name="email" />
                <br />
                <span> </span>
                <span className="error">
                  
                  <ErrorMessage name="email" />
                </span>
              </div>

              <div>
                <label className="signupLabel">Password</label>
                <br />
                <Field type="password" className="input" name="password"  />
                <br />
                <span> </span>
                <span className="error">
                  
                  <ErrorMessage name="password" />
                </span>
              </div>
              <p className="loginLink">
                
               
                <NavLink to={"/forgetPass"}> Forget Password? </NavLink>
              </p>
              <button className="signUPBtn" type="submit">
                Sign in
              </button>
              <div className="loginLink">
                
                Not a registered user,
                 <NavLink style={{color:'black',textDecoration:'underline',textDecorationColor:'blue'}} to={"/signup"}> Register here </NavLink>
               </div>
                
            
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;



















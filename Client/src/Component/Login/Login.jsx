import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Crypt } from "hybrid-crypto-js";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Login.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const toastStyle = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

function Login() {

  var crypt = new Crypt();
  const [userType, setUserType] = useState("user");

  const handleSelectChange = (event) => {
    setUserType(event.target.value);
  }

  const [userLoginData, setUserLoginData] = useState({
    userEmail: "",
    userPassword: ""
  });
  const [interiorDesignerLoginData, setInteriorDesignerLoginData] = useState({
    interiorDesignerEmail: "",
    interiorDesignerPassword: ""
  });
  const [architectLoginData, setArchitectLoginData] = useState({
    architectEmail: "",
    architectPassword: ""
  });
  const [adminLoginData, setAdminLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLoginData = (e) => {
    if (userType == "interiorDesigner") {
      setInteriorDesignerLoginData({
        ...interiorDesignerLoginData,
        [e.target.name]: e.target.value,
      })
    }
    if (userType == "architect") {
      setArchitectLoginData({
        ...architectLoginData,
        [e.target.name]: e.target.value,
      })
    }
    if (userType == "user") {
      setUserLoginData({
        ...userLoginData,
        [e.target.name]: e.target.value,
      })
    }
    if (userType == "admin") {
      setAdminLoginData({
        ...adminLoginData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (userType == "interiorDesigner") {

      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, interiorDesignerLoginData.interiorDesignerPassword);
      setInteriorDesignerLoginData({
        ...interiorDesignerLoginData,
        "interiorDesignerPassword": encryptedPassword,
      })

      axios.post(`http://localhost:3005/api/hsinteriordesigner/interiorDesignerLogin`, interiorDesignerLoginData)
        .then((res) => {
          console.log(res);
          const userObj = {
            id: res.data.interiordesigner._id,
            type: res.data.interiordesigner.type
          }

          localStorage.setItem("token", res.data.token)
          localStorage.setItem('userData', JSON.stringify(userObj))

          toast.success("Login successful", toastStyle);
          window.location.href = "/designer_dashboard"
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Fail", toastStyle);
        })
      // console.log(interiorDesignerLoginData)
    }

    if (userType == "architect") {

      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, architectLoginData.architectPassword);
      setArchitectLoginData({
        ...architectLoginData,
        "architectPassword": encryptedPassword,
      })
      axios.post(`http://localhost:3005/api/hsarchitect/architectLogin`, architectLoginData)
        .then((res) => {
          console.log(res);
          const userObj = {
            id: res.data.architect._id,
            type: res.data.architect.type
          }

          localStorage.setItem("token", res.data.token)
          localStorage.setItem('userData', JSON.stringify(userObj))

          toast.success("Login successful", toastStyle);
          window.location.href = "/designer_dashboard"
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Failed");
        })
      // console.log(architectLoginData)
    }

    if (userType == "user") {

      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, userLoginData.userPassword);
      setUserLoginData({
        ...userLoginData,
        "userPassword": encryptedPassword
      })
      axios.post("http://localhost:3005/api/hsuser/userLogin", userLoginData)
        .then((res) => {
          console.log(res);
          const userObj = {
            id: res.data.user._id,
            type: res.data.user.type
          }

          localStorage.setItem("token", res.data.token)
          localStorage.setItem('userData', JSON.stringify(userObj))

          window.location.href = "/Home"
          toast.success("Login successful", toastStyle);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Fail", toastStyle);
        })

      console.log(userLoginData)
    }

    if (userType == "admin") {
      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, adminLoginData.password);

      setAdminLoginData({
        ...adminLoginData,
        "password": encryptedPassword
      })

      axios.post(`http://localhost:3005/api/hsadmin/adminLogin`, adminLoginData)
        .then((res) => {
          console.log(res);
          const userObj = {
            id: res.data.admin._id,
            type: res.data.admin.type
          }
          localStorage.setItem("token", res.data.token)
          localStorage.setItem('userData', JSON.stringify(userObj))

          window.location.href = "/dashboard"
          toast.success("Login successful", toastStyle);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login Fail", toastStyle);
        })

    }
  }

  return (
    <>
      <Navbar />
      <section className="login">
        <div class="contain">
          {" "}
          <div class="form-wrapper sign-in">
            <form>
              <h2 className="header">
                <span>L</span>ogin
              </h2>

              <div className="selection-group">
                <span className="details">Type Of User:</span>
                <br />
                <select id="user_type" value={userType} className="spinner" onChange={(e) => handleSelectChange(e)}>
                  <option value="user">User</option>
                  <option value="interiorDesigner">Interior Designer</option>
                  <option value="architect">Architect</option>
                  <option value="admin">Admin</option>

                </select>
              </div>

              <div class="input-group">
                <input
                  name={userType === "interiorDesigner" ? "interiorDesignerEmail" : userType === "architect" ? "architectEmail" : userType === "admin" ? "email" : "userEmail"}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => handleLoginData(e)}
                  required
                />
              </div>
              <div class="input-group">
                <input
                  name={userType === "interiorDesigner" ? "interiorDesignerPassword" : userType === "architect" ? "architectPassword" : userType === "admin" ? "password" : "userPassword"}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleLoginData(e)}
                  required
                />
              </div>
              <br />

              <button type="submit" className="lgnbtn" onClick={(e) => handleLogin(e)}>
                Log in
              </button>

              <div class="signUp-link">
                <p>
                  Don't have an account?
                  <Link to="./Signup" class="signUpBtn-link">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Login;

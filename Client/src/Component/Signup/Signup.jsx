import React, { useState } from "react";
import axios from "axios";
import { Crypt } from "hybrid-crypto-js";
import { ToastContainer, toast } from 'react-toastify';
import "./Signup.css";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getInteriorDesignerSignup, getArchitectSignup, getUserSignup } from "../../Api";

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

function Signup() {

  var crypt = new Crypt();

  const [userType, setUserType] = useState("user");

  const handleSelectChange = (event) => {
    setUserType(event.target.value);
  };

  const [interiorData, setInterirotdata] = useState({
    interiorDesignerName: "",
    interiorDesignerEmail: "",
    interiorDesignerPassword: ""
  });

  const [achitectData, setArchitectData] = useState({
    architectName: "",
    architectEmail: "",
    architectPassword: ""
  })

  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: ""
  })

  const handleSignupData = (e) => {
    if (userType == "interiorDesigner") {
      setInterirotdata({
        ...interiorData,
        [e.target.name]: e.target.value,
      })
    }

    if (userType == "architech") {
      setArchitectData({
        ...achitectData,
        [e.target.name]: e.target.value,
      })
    }

    if (userType == "user") {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSignup = (e) => {

    e.preventDefault();

    if (userType == "interiorDesigner") {
      axios.post(getInteriorDesignerSignup, interiorData)
        .then((res) => {
          toast.success("Signup successful", toastStyle);
          window.location.href = "/Login";
          console.log(res);
        })
        .catch((err) => {
          toast.error("Signup Fail", toastStyle);
          console.log(err);
        })
      console.log(interiorData)
    }

    if (userType == "architech") {
      axios.post(getArchitectSignup, achitectData)
        .then((res) => {
          toast.success("Signup successful", toastStyle);
          window.location.href = "/Login";
          console.log(res);
        })
        .catch((err) => {
          toast.error("Signup Fail", toastStyle);
          console.log(err);
        })
      console.log(achitectData)
    }

    if (userType == "user") {
      axios.post(getUserSignup, userData)
        .then((res) => {
          toast.success("Signup successful", toastStyle);
          window.location.href = "/Login";
          console.log(res);
        })
        .catch((err) => {
          toast.error("Signup Fail", toastStyle);
          console.log(err);
        })
      console.log(userData)
    }

  }

  return (
    <>
      <Navbar />
      <section className="login">
        <div class="form-wrapper sign-up">
          <form>
            <h2 className="header">
              <span>S</span>ign <span>U</span>p
            </h2>

            <div className="selection-group">
              <span className="details">Type Of User:</span>
              <br />
              <select id="user_type" value={userType} className="spinner" onChange={(e) => handleSelectChange(e)}>
                <option value="interiorDesigner">Interior Designer</option>
                <option value="architech">Architect</option>
                <option value="user">User</option>
              </select>
            </div>


            <div class="input-group">
              <input
                name={userType === "interiorDesigner" ? "interiorDesignerName" : userType === "architech" ? "architectName" : "userName"}
                type="text"
                placeholder="Name"
                onChange={(e) => handleSignupData(e)}
                required
              />
            </div>
            <div class="input-group">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => handleSignupData(e)}
                name={userType === "interiorDesigner" ? "interiorDesignerEmail" : userType === "architech" ? "architectEmail" : "userEmail"}
                required
              />
            </div>
            <div class="input-group">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => handleSignupData(e)}
                name={userType === "interiorDesigner" ? "interiorDesignerPassword" : userType === "architech" ? "architectPassword" : "userPassword"}
              />
            </div>

            <button type="submit" className="lgbtn" onClick={(e) => handleSignup(e)}>
              Sign up
            </button>
            <div class="signUp-link">
              <p className="query">
                Already have an account?
                <Link to="/Login" className="signInBtn-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
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

export default Signup;

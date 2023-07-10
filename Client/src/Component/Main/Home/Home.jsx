import React from "react";
import {ToastContainer, toast} from "react-toastify";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h1 className="title">Design's You Don't Have to Imagine</h1>
          <p className="para">
            See your exact house, expertly designed in 3d with actual pieces of
            furniture from well-known desiner's. <br />
          </p>
          <Link to="/Contactus"> <button className="contact-btn">Contact Us</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });
  return (
    <>
      <header className="navbar">
        <div className="container flex">
          <div className="logo">
            <span className="capital">H</span>ouse
            <span className="capital"> C</span>raft
          </div>

          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Designers">Architects</Link>
              </li>
              <li>
                <Link to="/interiorDesigners">Interior Designers</Link>
              </li>
              <li>
                <Link to="/Designs">Designs</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Contactus">Contact Us</Link>
              </li>

              {/* <li>
                <Link to="/dashboard">Admin</Link>
              </li>
              <li>
                <Link to="/designer_dashboard">Designer Panel</Link>
              </li> */}

              <li className="icon">
                <button className="btn btn-login">
                  <Link to="/Login">Login</Link>
                </button>
                <button className="btn btn-signup">
                  <Link to="/Signup">Sign Up</Link>
                </button>
              </li>
            </ul>
          </div>

          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <AiFillCloseCircle /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

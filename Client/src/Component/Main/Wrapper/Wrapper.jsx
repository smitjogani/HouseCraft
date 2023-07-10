import React from "react";
import "./wrapper.css";

import { Link } from "react-router-dom";

const data = [
  {
    title: "Looking For Exclusive Services?",
    heading: "Get the best for Your Business",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, temporibus?",
  },
];

const Wrapper = () => {
  return (
    <>
      <section className="branding">
        <div className="container">
          {data.map((val) => {
            return (
              <div className="w_box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <Link to="/Contactus"><button className="secondary-btn">Contact Us</button></Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

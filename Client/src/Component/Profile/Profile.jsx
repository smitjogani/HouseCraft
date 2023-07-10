import React from "react";
import "./profile.css";

import profilepic from "../Assets/p4.jpg";
import img1 from "../Assets/b1.jpg";
import img2 from "../Assets/b2.jpg";
import img3 from "../Assets/b3.jpg";
import img4 from "../Assets/b4.jpg";
import img5 from "../Assets/b5.jpg";
import img6 from "../Assets/b6.jpg";

const Profile = () => {
  return (
    <>
      <section className="designer_profile">
        <div className="main_profile">
          <div>
            <img src={profilepic} alt="" className="profilePic" />
          </div>
          <div className="person_details">
            <h3 className="designer_name">Smit Jogani</h3>
            <h4 className="mobno">MO: 9485738238</h4>
            <address>
              24 xyz hub,
              <br /> Nr.ab mall,
              <br /> Ahemadabad-386583,
              <br /> Gujarat
              <br /> 📍 India
            </address>
          </div>
          <br />
        </div>
        <div className="profile_gallary">
          <div className="gimg">
            <img src={img1} alt="" className="pg" />
            <img src={img2} alt="" className="pg" />
            <img src={img3} alt="" className="pg" />
            <img src={img4} alt="" className="pg" />
            <img src={img5} alt="" className="pg" />
            <img src={img6} alt="" className="pg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

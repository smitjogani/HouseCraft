import React from "react";
import "./about.css";

//import Video
import video from "../../Assets/clip.mp4";

const About = () => {
  return (
    <>
      <section className="about_home section">
        <div className="secContainer">
          <div className="title">
            <h2>Why Us?</h2>
            <p>Wonderful Client Experience</p>
          </div>

          <div className="videoCard container">
            <div className="cardContent grid">
              <div className="cardText">
                <h2>Wonderful Client Experience!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ut fugiat vel et delectus?
                </p>
                <br/>
              </div>
              <div className="cardVedio">
                <video src={video} autoPlay loop muted type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";
import "./popular.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

// import images
import img1 from "../../Assets/interior.jpg";
import img2 from "../../Assets/exterior.jpg";
import img3 from "../../Assets/office.jpg";
import img4 from "../../Assets/bedroom.jpg";
import img5 from "../../Assets/kitchen.jpg";
import img6 from "../../Assets/drawing.jpg";
import img7 from "../../Assets/cafe.jpg"
import img8 from "../../Assets/b6.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    title: "Interior Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Exterior Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Office Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    imgSrc: img4,
    title: "Bedroom Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    imgSrc: img5,
    title: "Kitchen Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 6,
    imgSrc: img6,
    title: "Drawingroom Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 7,
    imgSrc: img7,
    title: "Cafe Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 8,
    imgSrc: img8,
    title: "Shop Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Popular = () => {
  return(
    <>
    <section>
    <section className="popular">
        <div className="setContainer">
          <div className="secHeader">
            <div className="textDiv">
              <h2 className="secTitle">Our Services</h2>
              <p>Intractive Services Offered From Us</p>
            </div>

            <div className="mainContent">
              {
              Data.map(({imgSrc, title, desc}) => {
                return (
                  <div className="singleDestination">
                    <div className="descImage">
                      <img src={imgSrc} alt="Image Title" />

                      <div className="overlayInfo">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <AiOutlineArrowRight className="icon" />
                      </div>
                    </div>
                  </div>
                );
              })
              }
            </div>
          </div>
        </div>
      </section>
    </section>
    </>
  )
};

export default Popular;

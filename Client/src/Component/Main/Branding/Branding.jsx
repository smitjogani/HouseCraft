import React from "react";
import "./branding.css";

const data = [
  {
    id: "01",
    heading: "Interior Design",
    desc: "We provide Interior Designer for design your resident and work area from inside",
  },
  {
    id: "02",
    heading: "Exterior Design",
    desc: "We provide Architect for design your resident and work area from outside",
  },
];

const Branding = () => {
  return (
    <>
      <section className="branding">
        <div className="b_container b_grid">
          {data.map((value) => {
            return (
              <div className="b_box b_flex">
                <div className="text">
                  <h1>{value.id}</h1>
                </div>
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branding;

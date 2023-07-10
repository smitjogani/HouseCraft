import React from "react";
import "./About.css";

import bg2 from "../Assets/ab2.jpg";

const About = () => {
  return (
    <>
      <section className="about_main">
        <div className="container">
          <div className="heading">
            <div className="left">
              <h1>Our Story</h1>
              <h5>Check out our company story and process</h5>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                at, magni praesentium nulla modi consectetur totam quaerat
                beatae ex maiores officia nisi esse aliquid, culpa minus animi
                voluptatibus. Omnis, et. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Provident dignissimos reiciendis voluptas,
              </p>
              <p>
                {" "}
                repellendus pariatur, nam est, possimus aut temporibus ipsum
                nisi maxime quibusdam nemo dicta eligendi! Ducimus, maiores
                molestiae magni, hic enim in laudantium reiciendis ratione iusto
                veritatis necessitatibus laboriosam atque quasi odit!
                Voluptatibus rem veritatis accusantium odit aliquid animi est
              </p>
              <p>
                sint, impedit sed nihil in qui atque illum ducimus! Qui corporis
                molestias, minus, tenetur et excepturi illo placeat quos,
                dolorem consequatur aliquid sapiente perspiciatis est
                repudiandae ipsam cum! Dolorum, omnis impedit! Recusandae
                dolores mollitia vitae, similique cumque consectetur, omnis
                inventore vel dolorem totam rerum. Animi quos voluptatum dolor
                explicabo.
              </p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates laborum perspiciatis minima dicta quis nesciunt
                doloribus dolore, temporibus repellendus possimus quo
                praesentium magni nihil impedit? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Velit veniam in mollitia aliquam?
                Sit amet molestias quas est consequatur, natus corporis
                deserunt, eaque iure odio atque dignissimos laudantium nesciunt
                nostrum, sapiente eius ipsam perspiciatis aliquid. Repellendus
                necessitatibus saepe eum ipsam. Consectetur nulla, id
                consequuntur dolores labore itaque nostrum repellendus facere
                doloremque facilis corrupti nesciunt dolor esse natus magni
                commodi deleniti incidunt quisquam distinctio? Eos amet deleniti
                ipsam nemo labore laborum voluptate quis id quaerat. In numquam
                perspiciatis eveniet laboriosam nostrum animi eligendi saepe
              </p>
            </div>
            <div className="right pic row">
              <img src={bg2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

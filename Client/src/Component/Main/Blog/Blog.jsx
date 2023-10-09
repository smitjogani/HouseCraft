import React from "react";
import "./blog.css";

import img1 from "../../Assets/b1.jpg";
import img2 from "../../Assets/b2.jpg";
import img3 from "../../Assets/b3.jpg";
import img4 from "../../Assets/b4.jpg";
import img5 from "../../Assets/b5.jpg";
import img6 from "../../Assets/b6.jpg";
import img7 from "../../Assets/shop.jpg";
import img8 from "../../Assets/kitchen.jpg";
const detail = [
  {
    id: 1,
    img: img1,
    title: "Interior Designing of House",
    Location: "Ahemadabad",
    Size: "1000 X 1000ft",
    date: "21 March 2022",
  },
  {
    id: 2,
    img: img2,
    title: "Office's Interior Design",
    Location:"Surat",
    Size: "50 X 50ft",
    date: "11 April 2022",
  },
  {
    id: 3,
    img: img3,
    title: "Architecture Of Villa",
    Location: "Hawwai",
    Size: "300 X 300ft",
    date: "03 April 2022",
  },
  {
    id: 4,
    img: img4,
    title: "Architecture Of Farm House",
    Location: "UAE",
    Size: "640 X 789ft",
    date: "18 September 2022",
  },
  {
    id: 5,
    img: img5,
    title: "Cafe's Interior",
    Location: "USA",
    Size: "230 X 250ft",
    date: "30 December 2022",
  },
  {
    id: 6,
    img: img6,
    title: "Interior of Banquet",
    Location: "New York",
    Size: "2000 X 1000ft",
    date: "13 January 2023",
  },
  // {
  //   id: 7,
  //   img: img7,
  //   title: "Shop Design",
  //   Location: "Australia",
  //   date: "17 January 2023",
  //   Size: "360 X 140ft",
  // },
  // {
  //   id: 8,
  //   img: img8,
  //   title: "Kitchen Design",
  //   Location: "Mumbai",
  //   Size: "30 X 40ft",
  //   date: "06 February 2023",
  // },
];

const Blog = () => {
  return (
    <section className="blog_main">
      <div class="s-heading">
        <h1>Blogs</h1>
        <p>Here Is The Some Blogs.</p>
      </div>
      <div className="blog_post">
        {detail.map(({ img, title, Location, Size, date }) => {
          return (
            <>
              <div class="b-container">
                <div class="s-box">
                  <div class="s-b-img">
                    <div class="s-type">{title}</div>

                    <img src={img} />
                  </div>

                  <div class="s-b-text">
                    <p className="designerAbout">
                      <span>Location: </span>
                      {Location}
                    </p>
                    <p className="designerAbout">
                      <span>Size:</span> {Size}
                    </p>
                    <p className="designerAbout">
                      <span>Date:</span> {date}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;

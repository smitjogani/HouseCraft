import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import "./design.css";
// import { Link } from "react-router-dom";

// import img1 from "../Assets/b1.jpg";
// import img2 from "../Assets/b2.jpg";
// import img3 from "../Assets/b3.jpg";
// import img4 from "../Assets/b4.jpg";
// import img5 from "../Assets/b5.jpg";
// import img6 from "../Assets/b6.jpg";
// import img7 from "../Assets/shop.jpg";
// import img8 from "../Assets/kitchen.jpg";

// const detail = [
//   {
//     id: 1,
//     img: img1,
//     title: "Interior Designing of House",
//     Location: "Ahemadabad",
//     size: "210 X 110ft",
//     price: 3400,
//   },
//   {
//     id: 2,
//     img: img2,
//     title: "Office's Interior Design",
//     Location: "Delhi",
//     size: "40 X 30ft",
//     price: 23999,
//   },
//   {
//     id: 3,
//     img: img3,
//     title: "Architecture Of Villa",
//     Location: "Denmark",
//     size: "400 X 450ft",
//     price: 74499,
//   },
//   {
//     id: 4,
//     img: img4,
//     title: "Architecture Of Farm House",
//     Location: "Noida",
//     size: "300 X 280ft",
//     price: 46000,
//   },
//   {
//     id: 5,
//     img: img5,
//     title: "Cafe's Interior",
//     Location: "Hawai",
//     size: "100 X 110ft",
//     price: 54000,
//   },
//   {
//     id: 6,
//     img: img6,
//     title: "Interior of Banquet",
//     Location: "Dubai",
//     size: "400 X 400ft",
//     price: 140000,
//   },
//   {
//     id: 7,
//     img: img7,
//     title: "Shop Design",
//     Location: "Surat",
//     size: "180 X 170ft",
//     price: 88000,
//   },
//   {
//     id: 8,
//     img: img8,
//     title: "Kitchen Design",
//     Location: "New Your",
//     size: "40 X 40ft",
//     price: 79000,
//   },
//   {
//     id: 9,
//     img: img1,
//     title: "Interior Designing of House",
//     Location: "UK",
//     size: "500 X 450ft",
//     price: 45500,
//   },
//   {
//     id: 10,
//     img: img2,
//     title: "Office's Interior Design",
//     Location: "Mumbai",
//     size: "136 X 136ft",
//     price: 25000,
//   },
//   {
//     id: 11,
//     img: img3,
//     title: "Exterior Design Of Villa",
//     Location: "Juhu beach",
//     size: "370 X 370ft",
//     price: 300000,
//   },
//   {
//     id: 12,
//     img: img1,
//     title: "Interior Designing of House",
//     Location: "Delhi",
//     size: "200 X 200ft",
//     price: 2000000,
//   },
//   {
//     id: 13,
//     img: img2,
//     title: "Office's Interior Design",
//     Location: "Goa",
//     size: "230 X 230ft",
//     price: 749000,
//   },
//   {
//     id: 14,
//     img: img3,
//     title: "Architecture Of Villa",
//     Location: "Pune",
//     size: "500 X 500ft",
//     price: 500000,
//   },
//   {
//     id: 15,
//     img: img4,
//     title: "Architecture Of Farm House",
//     Location: "Bengaluru",
//     size: "350 X 300ft",
//     price: 799000,
//   },
//   {
//     id: 16,
//     img: img5,
//     title: "Cafe's Interior",
//     Location: "Ahemadabad",
//     size: "80 X 80ft",
//     price: 300000,
//   },
// ];
const Design = () => {

  const [data, setData] = useState();
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3005/api/hsProduct/ListofProduct`)
      .then((res) => {
        // console.log(res.data.result.docs)
        setData(res.data.result.docs)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleView = (id) => {
    history.push(`/Designerprofile/${id}`)
  }

  return (
    <>
      <section className="blog_main">
        <div className="blog_container">
          {!isEmpty(data) && data.map((item) => {
            return (
              <>
                <div class="b-container">
                  <div class="s-box">
                    <div class="s-b-img">
                      <div class="s-type">{item.productName}</div>

                      <img src={`http://${item.productImg}`} />
                    </div>

                    <div class="s-b-text">
                      <p className="designerAbout">
                        <span>Size:</span>₹ {item.productSize}
                      </p>
                      <p className="designerAbout">
                        <span>Location: </span>
                        {item.productLocation}
                      </p>
                      <p className="designerAbout">
                        <span>Price:</span>₹ {item.productPrice}
                      </p>
                      <button className="mainContactDesigner" onClick={() => { handleView(item.designerId) }}>
                        Contact Designer
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Design;
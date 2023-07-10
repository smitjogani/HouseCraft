import React, { useState, useEffect } from "react";
import "./p.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { isEmpty } from 'lodash';


// import profilePic from "../../../../../Component/Assets/p3.jpg";
import img1 from "../../../../../Component/Assets/b1.jpg";
import img2 from "../../../../../Component/Assets/b2.jpg";
import img3 from "../../../../../Component/Assets/b3.jpg";
import img4 from "../../../../../Component/Assets/b4.jpg";
import img5 from "../../../../../Component/Assets/b5.jpg";
import img6 from "../../../../../Component/Assets/b6.jpg";
import img7 from "../../../../../Component/Assets/shop.jpg";

const Clickprofileinterior = () => {

  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {

    axios.get(`http://localhost:3005/api/hsinteriordesigner/getInteriorDesigner/${id}`).then((response) => {
      // console.log(response.data.result)
      setData(response.data.result)
    }).catch();

  }, [id])


  return (
    <section className="profilePage">
      <div className="header_wrapper">
        <header></header>
        {!isEmpty(data) ? <div className="col_container">
          <div className="left_col">
            <div className="img_container">
              <img src={`http://localhost:3005/${data.interiorDesignerProfile}`} alt="Profile Picture" />
            </div>
            <h2 className="profileHeader">{data.interiorDesignerName}</h2>
            <p className="profileDesignerDetail">{data.type}</p>
            <p className="profileDesignerDetail">{data.interiorDesignerEmail}</p>

            <ul className="profile_about">
              <li>
                <span>175</span>Designs
              </li>
            </ul>

            <div className="profile_contant">
              <p>
                <h4 className="mobno">MO: {data.interiorDesignerPhone}</h4>
                <h5 className="mobno">GST No: {data.interiorDesignerGst}</h5>
                <address>
                  {data.interiorDesignerAdd}
                  {/* <br /> Nr.ab mall, */}
                  <br /> {data.interiorDesignerCity}-{data.interiorDesignerPincode},
                  <br /> {data.interiorDesignerState}
                  <br /> 📍 {data.interiorDesignerCountry}
                </address>
              </p>

              {/* <ul className="iconList profile_about">
                <li>
                  <i className="fb">
                    <FaFacebookF />
                  </i>
                </li>
                <li>
                  <i className="insta">
                    <FaInstagram />
                  </i>
                </li>
                <li>
                  <i className="twit">
                    <FaTwitter />
                  </i>
                </li>
                <li>
                  <i className="mail">
                    <MdEmail />
                  </i>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="right-col">
            <div className="profileDesigns">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
            </div>
          </div>
        </div> : <>
          <p>Loading...</p>
        </>}

      </div>
    </section>
  );
};

export default Clickprofileinterior;

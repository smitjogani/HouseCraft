import React,{useState,useEffect} from "react";
import "./p.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import {isEmpty} from 'lodash';

// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

import profilePic from "../../../../../ComponentAssets/p3.jpg";
import img1 from "../../../../../Component/Assets/b1.jpg";
import img2 from "../../../../../ComponentAssets/b2.jpg";
import img3 from "../../../../../ComponentAssets/b3.jpg";
import img4 from "../../../../../ComponentAssets/b4.jpg";
import img5 from "../../../../../ComponentAssets/b5.jpg";
import img6 from "../../../../../ComponentAssets/b6.jpg";
import img7 from "../../../../../ComponentAssets/shop.jpg";

const ClickprofileArchitect = () => {

  const {id} = useParams();
  const [data, setData] = useState();

  useEffect(() => {

    axios.get(`http://localhost:3005/api/hsarchitect/getArchitect/${id}`).then((response)=>{
      console.log(response.data.result)
      setData(response.data.result)
    }).catch();

  }, [id])
  

  return (
    <section className="profilePage">
      <div className="header_wrapper">
        <header></header>
        {!isEmpty(data) ?<div className="col_container">
          <div className="left_col">
            <div className="img_container">
              <img src={profilePic} alt="Profile Picture" />
            </div>
            <h2 className="profileHeader">{data.architectName
}</h2>
            <p className="profileDesignerDetail">{data.type}</p>
            <p className="profileDesignerDetail">{data.architectEmail}</p>

            <ul className="profile_about">
              <li>
                <span>175</span>Designs
              </li>
            </ul>

            <div className="profile_contant">
              <p>
                <h4 className="mobno">MO: {data.architectPhone}</h4>
                <h5 className="mobno">GST No: {data.architectGst}</h5>
                <address>
                  {data.architectAdd}
                  {/* <br /> Nr.ab mall, */}
                  <br /> {data.architectCity}-{data.architectPincode},
                  <br /> {data.architectState}
                  <br /> 📍 {data.architectCountry}
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
        </div> :<>
            <p>Loading...</p>
        </>}
       
      </div>
    </section>
  );
};

export default ClickprofileArchitect;

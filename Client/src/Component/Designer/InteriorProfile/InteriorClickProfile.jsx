import React, { useState, useEffect } from "react";
import "./interiorClick.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { isEmpty } from 'lodash';

// import profilePic from "../../Assets/p3.jpg";
// import img1 from "../../Assets/b1.jpg";
// import img2 from "../../Assets/b2.jpg";
// import img3 from "../../Assets/b3.jpg";
// import img4 from "../../Assets/b4.jpg";
// import img5 from "../../Assets/b5.jpg";
// import img6 from "../../Assets/b6.jpg";
// import img7 from "../../Assets/shop.jpg";


const Clickprofile = () => {

  const { id } = useParams();
  const [data, setData] = useState();
  const [designData, setDesignData] = useState();

  useEffect(() => {

    axios.get(`http://localhost:3005/api/hsinteriordesigner/getInteriorDesigner/${id}`).then((response) => {
      console.log(response.data.result)
      setData(response.data.result)
    }).catch();

    axios.get(`http://localhost:3005/api/hsProduct/getproductbydesignerId/${id}`)
      .then((res) => {
        console.log(res.data.projects);
        setDesignData(res.data.projects);
      })
      .catch((err) => {
        console.log(err)
      })

  }, [id])


  return (
    <section className="profilePage">
      <div className="header_wrapper">
        <header></header>
        {!isEmpty(data) ? <div className="col_container">
          <div className="left_col">
            <div className="img_container">
              <img src={`http://localhost:3005/${data.interiorDesignerProfile}`} alt="" />
            </div>
            <h2 className="profileHeader">{data.interiorDesignerName
            }</h2>
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
                  {data.architectAdd}
                  {/* <br /> Nr.ab mall, */}
                  <br /> {data.interiorDesignerCity}-{data.interiorDesignerPincode},
                  <br /> {data.interiorDesignerState}
                  <br /> 📍 {data.interiorDesignerCountry}
                </address>
              </p>
            </div>
          </div>

          <div className="right-col">
            <div className="profileDesigns">
              {!isEmpty(designData) ? designData.map((item) => {
                return (
                  <>
                    <img src={`http://localhost:3005/${item.productImg}`} alt="" className="profileDesignerImg"/>
                    {/* <img src={img6} alt="" />
                        <img src={img2} alt="" />
                        <img src={img1} alt="" />
                        <img src={img7} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" /> */}
                  </>
                )
              })
                : <>No Design Uploaded</>

              }
            </div >
          </div>
        </div> : <>
          <p>Loading...</p>
        </>}

      </div>
    </section>
  );
};

export default Clickprofile;

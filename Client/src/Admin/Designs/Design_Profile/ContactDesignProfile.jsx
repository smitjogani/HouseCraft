import React, { useState, useEffect } from "react";
// import "./p.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { isEmpty } from 'lodash';

import img1 from "../../../Component/Assets/b1.jpg";
import img2 from "../../../Component/Assets/b2.jpg";
import img3 from "../../../Component/Assets/b3.jpg";
import img4 from "../../../Component/Assets/b4.jpg";
import img5 from "../../../Component/Assets/b5.jpg";
import img6 from "../../../Component/Assets/b6.jpg";
import img7 from "../../../Component/Assets/shop.jpg";

const ContactDesignProfile = () => {

    let { id } = useParams();
    const [data, setData] = useState();
    const [designData, setDesignData] = useState();
      const [db,setDb] = useState();

    useEffect(() => {

        axios.get(`http://localhost:3005/api/hsarchitect/getArchitect/${id}`)
        .then((res) => {
            console.log(res);
        })

        axios.get(`http://localhost:3005/api/hsarchitect/getArchitect/${id}`)
        .then((response) => {
            console.log(response.data.result)
            setData(response.data.result)
        }).catch();

        axios.get(`http://localhost:3005/api/hsinteriordesigner/getInteriorDesigner/${id}`).then((response) => {
          console.log(response.data.result)
          setDb(response.data.result)
        }).catch();

        axios.get(`http://localhost:3005/api/hsProduct/getproductbydesignerId/${id}`)
            .then((res) => {
                // console.log(res.data.projects);
                setDesignData(res.data.projects);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className="profilePage">
            <div className="header_wrapper">
                <header></header>
                {!isEmpty(data) ? <div className="col_container">
                    <div className="left_col">
                        <div className="img_container">
                            <img src={`http://localhost:3005/${data.architectProfile}`} alt="Profile Picture" />
                        </div>
                        <h2 className="profileHeader">{data.architectName}</h2>
                        <p className="profileDesignerDetail">{data.type}</p>
                        <p className="profileDesignerDetail">{data.architectEmail}</p>
                        {/* <ul className="profile_about">
              <li>
                <span>175</span>Designs
              </li>
            </ul> */}
                        <div className="profile_contant">
                            <p>
                                <h4 className="mobno">MO: {data.architectPhone}</h4>
                                <h5 className="mobno">GST No: {data.architectGst}</h5>
                                <address>
                                    {data.architectAdd}
                                    <br /> {data.architectCity}-{data.architectPincode},
                                    <br /> {data.architectState}
                                    <br /> 📍 {data.architectCountry}
                                </address>
                            </p>
                        </div>
                    </div>

                    <div className="right-col">
                        <div className="profileDesigns">
                            {!isEmpty(designData) ? designData.map((item) => {
                                return (
                                    <>
                                        <img src={`http://localhost:3005/${item.productImg}`} alt="" className="profileDesignerImg" />
                                    </>
                                )
                            })
                                : <> No Design Uploaded </>
                            }
                        </div >
                    </div>
                </div> :
                    <h1>
                        Loading...
                    </h1>
                }
            </div >
        </section >

    )
}

export default ContactDesignProfile
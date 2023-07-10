import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

import "../Designer.css";

// import { Link } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const InteriorDesignerHome = () => {
    const history = useHistory();
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:3005/api/hsinteriordesigner/ListofInteriorDesigner")
            .then((res) => {
                setData(res.data.result.docs)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const handleView = (id) => {
        history.push(`/InteriorProfile/${id}`);
    }

    return (
        <>
            <Navbar />

            <section className="mainContainer">
                {!isEmpty(data) && data.map((item) => {
                    return (
                        <div className="wrappers space" onClick={() => { handleView(item._id) }}>
                            <div className="img-area">
                                <div className="inner-area">
                                    <img src={`http://${item.interiorDesignerProfile}`} alt="" className="proCardPic" />
                                    {/* <img src={img} alt="" className="proCardPic" /> */}
                                </div>
                            </div>
                            <div className="dname">{item.interiorDesignerName}</div>
                            <div className="about">{item.type}</div>
                            <div className="location">📍{item.interiorDesignerCountry}</div>

                        </div>
                    );
                })}
            </section>
            <Footer />
        </>
    )
}

export default InteriorDesignerHome
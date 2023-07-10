import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

import "./Designer.css";

// import img1 from "../Assets/p1.jpg";

const Designer = () => {

  const history = useHistory();

  const [data, setData] = useState();
  // const [currentArchitect , setCurrentArchitect] = useState({})


  useEffect(() => {
    axios.get("http://localhost:3005/api/hsarchitect/ListofArchitect")
      .then((response) => {
        // console.log(response.data.result.docs)
        setData(response.data.result.docs)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  const handleView = (id) => {
    history.push(`/Designerprofile/${id}`);
  }

  return (
    <>
      {/* <Link to="/Designerprofile"> */}
      <section className="mainContainer">
        {!isEmpty(data) && data.map((item) => {
          return (
            <div className="wrappers space" onClick={() => { handleView(item._id) }}>
              <div className="img-area">
                <div className="inner-area">
                  {/* <img src={img1} className="proCardPic" alt="" /> */}
                  <img src={`http://${item.architectProfile}`} className="proCardPic" alt="" />
                </div>
              </div>
              <div className="dname">{item.architectName}</div>
              <div className="about">{item.type}</div>
              <div className="location">📍{item.architectCountry}</div>
            </div>
          );
        })}
      </section>
      {/* </Link> */}
    </>
  );
};

export default Designer;

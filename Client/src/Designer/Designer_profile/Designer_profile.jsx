import React, { useState, useEffect } from "react";
import "./designer_profile.css";
import DesignerSidebar from "../Designer_sidebar/Designer_sidebar"
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty } from 'lodash';

const Designer_profile = () => {

  const [userData, setUserData] = useState(["INTERIORDESIGNER"])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      setUserData(userData);
    }
  }, [])

  const userType = userData.type;
  // console.log(userType)

  const id = userData.id;
  // console.log(id)

  const [data, setData] = useState();

  // const fetchProfileData = () => {
    if (userType == "ARCHITECT") {
      axios.get(`http://localhost:3005/api/hsarchitect/getArchitect/${id}`)
        .then((res) => {
          // console.log(res.data.result)
          setData(res.data.result)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  
    if (userType == "INTERIORDESIGNER") {
      axios.get(`http://localhost:3005/api/hsinteriordesigner/getInteriorDesigner/${id}`)
        .then((res) => {
          // console.log(res.data.result)
          setData(res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  // }
  // useEffect(() => {
  //   fetchProfileData()
  // },[])

  return (
    <>
      <DesignerSidebar />
      { userType === "ARCHITECT" ?
        <section className="designer_profile">
        {!isEmpty(data) ? <div className="profileWrapper">
          <div className="profileLeft">
            <img
              src={`http://localhost:3005/${data.architectProfile}`}
              alt=""
              className="designerProfilePic"
              width="300"
            />
            <h4 className="designerProfileName">{data.architectName}</h4>
            <p className="designerProfileDetails">{data.type}</p>
          </div>
          <div className="profileRight">
            <div className="designerProfileInfo">
              <h3 className="designerProfileTitle">
                <span>A</span>bout
              </h3>
              <div className="designerProfileData">
                <div className="profileData">
                  <h4 className="profileDetail">Email</h4>
                  <p>{data.architectEmail}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">Phone</h4>
                  <p>{data.architectPhone}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">GST No</h4>
                  <p>{data.architectGst}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">Address</h4>
                  <p>
                    <address>
                      {data.architectAdd}
                      <br /> {data.architectCity}
                      <br /> {data.architectPincode}
                      <br /> {data.architectState},
                      <br /> 📍{data.architectCountry}
                    </address>
                  </p>
                </div>
              </div>
            </div>
            <div className="designerProfileSubmit">
              <Link to="/profile_insert">
                {" "}
                <button className="designerProfileSubmitBtn">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div> : <>
          <p>Loading...</p></>}
      </section>
       :
       <section className="designer_profile">
        {!isEmpty(data) ? <div className="profileWrapper">
          <div className="profileLeft">
            <img
              src={`http://localhost:3005/${data.interiorDesignerProfile}`}
              alt=""
              className="designerProfilePic"
              width="300"
            />
            
            <h4 className="designerProfileName">{data.interiorDesignerName}</h4>
            <p className="designerProfileDetails">{data.type}</p>
          </div>
          <div className="profileRight">
            <div className="designerProfileInfo">
              <h3 className="designerProfileTitle">
                <span>A</span>bout
              </h3>
              <div className="designerProfileData">
                <div className="profileData">
                  <h4 className="profileDetail">Email</h4>
                  <p>{data.interiorDesignerEmail}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">Phone</h4>
                  <p>{data.interiorDesignerPhone}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">GST No</h4>
                  <p>{data.interiorDesignerGst}</p>
                </div>
                <div className="profileData">
                  <h4 className="profileDetail">Address</h4>
                  <p>
                    <address>
                      {data.interiorDesignerAdd}
                      <br /> {data.interiorDesignerCity}
                      <br /> {data.interiorDesignerPincode}
                      <br /> {data.interiorDesignerState},
                      <br /> 📍{data.interiorDesignerCountry}
                    </address>
                  </p>
                </div>
              </div>
            </div>
            <div className="designerProfileSubmit">
              <Link to="/profile_insert">
                {" "}
                <button className="designerProfileSubmitBtn">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div> : <>
          <p>Loading...</p></>}
      </section>
      }
    </>
  );
};

export default Designer_profile;

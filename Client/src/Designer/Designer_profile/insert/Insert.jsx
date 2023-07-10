import React, { useEffect, useState } from "react";
import "./insert.css";
import DesignerSidebar from "../../Designer_sidebar/Designer_sidebar"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Crypt } from "hybrid-crypto-js";

const toastStyle = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Insert = () => {

  var crypt = new Crypt();
  const [userData, setUserData] = useState(["INTERIORDESIGNER"])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      setUserData(userData);
    }
  }, [])

  const [architect, setArchitect] = useState({
    architectName: "",
    architectEmail: "",
    architectPassword: "",
    architectPhone: "",
    architectGst: "",
    architectAdd: "",
    architectCity: "",
    architectPincode: "",
    architectState: "",
    architectCountry: "",
    architectProfile: ""
  });

  const [interiorDesigner, setInteriorDesigner] = useState({
    interiorDesignerName: "",
    interiorDesignerEmail: "",
    interiorDesignerPhone: "",
    interiorDesignerGst: "",
    interiorDesignerAdd: "",
    interiorDesignerPassword: "",
    interiorDesignerCity: "",
    interiorDesignerPincode: "",
    interiorDesignerState: "",
    interiorDesignerCountry: "",
    interiorDesignerProfile: ""
  })

  const handleEditData = (e) => {
    if (userType == "INTERIORDESIGNER") {
      setInteriorDesigner({
        ...interiorDesigner,
        [e.target.name]: e.target.value,
      })
    }
    if (userType == "ARCHITECT") {
      setArchitect({
        ...architect,
        [e.target.name]: e.target.value,
      })
    }
  }

  const userType = userData.type;
  // console.log(userType)

  const id = userData.id;
  // console.log(id)

  const [profileImage, setProfileImage] = useState("")
  const [arcProfileImage, setArcProfileImage] = useState("")

  const handleImageChange = (e) => {

    if (userType == "INTERIORDESIGNER") {
      const formData = new FormData();
      const file = e.target.files[0];

      formData.append("interiorDesignerProfile", file);
      axios.post(`http://localhost:3005/api/hsinteriordesigner/uploadInteriorDesignerProfile`, formData)
        .then((res) => {
          // console.log(res.data.result);

          setProfileImage(res.data.urlArray[0])
          // console.log(res.data.urlArray[0])
        })
        .catch((err) => {
          console.log(err)
        })
    }

    if (userType == "ARCHITECT") {
      const formData = new FormData();
      const file = e.target.files[0];

      formData.append("architectProfile", file);
      axios.post(`http://localhost:3005/api/hsarchitect/uploadArchitectProfileImage`, formData)
        .then((res) => {
          // console.log(res.data.result);

          setArcProfileImage(res.data.urlArray[0])
          // console.log(res.data.urlArray[0])

        })
        .catch((err) => {
          console.log(err)
        })
    }

  }

  const handleEdit = (e) => {
    e.preventDefault();

    if (userType == "INTERIORDESIGNER") {

      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, interiorDesigner.interiorDesignerPassword);
      setInteriorDesigner({
        ...interiorDesigner,
        interiorDesignerPassword: encryptedPassword,
        interiorDesignerProfile: profileImage
      })
      // console.log(interiorDesigner)
      axios.put(`http://localhost:3005/api/hsinteriordesigner/UpdateInteriorDesignerDetails/${id}`, interiorDesigner)
        .then((res) => {
          console.log(res);
          // alert("Profile Updated");
          toast.success("Profile Updated", toastStyle);
        })
        .catch((err) => {
          console.log(err)
          // alert(err)
          toast.error("Profile Update Fail", toastStyle);
        })
    }

    if (userType == "ARCHITECT") {

      let encryptedPassword = crypt.encrypt(process.env.REACT_APP_KEY, architect.architectPassword)
      setArchitect({
        ...architect,
        architectPassword: encryptedPassword,
        architectProfile: arcProfileImage
      })
      // console.log(arcProfileImage)
      axios.put(`http://localhost:3005/api/hsarchitect/UpdateArchitectDetails/${id}`, architect)
        .then((res) => {
          console.log(res);
          alert("Profile Updated")
        })
        .catch((err) => {
          console.log(err)
          alert(err)
        })
    }

  }

  return (
    <>
      <DesignerSidebar />
      <section className="insertBody">
        <div className="insertContainer">
          <div className="insert-title">
            <span>D</span>esigner<span>D</span>etails
          </div>
          <div className="insert-content">
            <form action="#">
              <div className="insert-user-details">
                <div className="insert-input-box">
                  <span className="insert-details">Full Name</span>
                  <input
                    type="insert-text"
                    placeholder="Enter your name"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerName" : "architectName"}
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Phone No.</span>
                  <input
                    type="insert-text"
                    placeholder="Enter your phone no"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerPhone" : "architectPhone"}
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Email</span>
                  <input
                    type="insert-text"
                    placeholder="Enter your email"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerEmail" : "architectEmail"}
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">GST No</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerGst" : "architectGst"}
                    placeholder="Enter your gstin"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Address</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerAdd" : "architectAdd"}
                    placeholder="Enter your address"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Password</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerPassword" : "architectPassword"}
                    placeholder="Enter your Password"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>

                <div className="insert-input-box">
                  <span className="insert-details">City</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerCity" : "architectCity"}
                    placeholder="Enter your city"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Pincode</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerPincode" : "architectPincode"}
                    placeholder="Enter your pincode"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">State</span>
                  <input
                    type="insert-text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerState" : "architectState"}
                    placeholder="Enter your state"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div className="insert-input-box">
                  <span className="insert-details">Country</span>
                  <input
                    type="text"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerCountry" : "architectCountry"}
                    placeholder="Enter your country"
                    onChange={(e) => handleEditData(e)}
                  />
                </div>
                <div>
                  <span className="insert-details">Upload Profile</span>
                  <input
                    type="file"
                    name={userType === "INTERIORDESIGNER" ? "interiorDesignerProfile" : "architectProfile"}
                    placeholder="Enter your country"
                    className="insert-details"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>
              </div>
              <div className="insert-button">
                <input type="submit"
                  value="Save"
                  onClick={(e) => handleEdit(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Insert;

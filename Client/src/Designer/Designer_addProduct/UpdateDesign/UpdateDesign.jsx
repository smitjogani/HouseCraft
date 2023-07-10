import React, { useState, useEffect } from "react";
import "./updateDesign.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import DesignerSidebar from "../../Designer_sidebar/Designer_sidebar"
import Dash_header from "../../../Admin/Header/Dash_header";
import axios from "axios";

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

const UpdateDesign = () => {

  let {id} = useParams();

  const [productImg, setProductImg] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productSize: "",
    productLocation: "",
    productImg: "",
    productPrice: "",
  })

  const handleProductData = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDesign = (e) => {
    e.preventDefault();

    setProductData({
      ...productData,
      productImg: productImg
    })

    axios.put(`http://localhost:3005/api/hsProduct/updateProduct/${id}`,productData)
    .then((res) => {
      console.log(res);
      // alert('Design Updated');
      toast.success("Product Updated", toastStyle);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Product Update Unsuccessful", toastStyle);
    })

    // console.log(productData)
  }

  const handleImageChange = (e) =>{
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("productImg", file);
    axios.post(`http://localhost:3005/api/hsProduct/uploadProductImage`,formData)
    .then((res) => {
      console.log(res.data.result);

      setProductImg(res.data.urlArray[0])
      // console.log(res.data.urlArray[0])
    })
  }

  return (
    <>

      <DesignerSidebar />
      <section className="createDesign">
        <div className="addDesign_heder">
          <Dash_header
            name="Update Design"
            path="Designer / Design / Update Design"
          />
        </div>

        <div className="add-design">
          <div className="add-design-sub1">
            <div className="box">
              <p>Enter Design Type:</p>
              <input
                type="text"
                name="productName"
                required
                // value={designType}
                onChange={(e) => handleProductData(e)}
              />
            </div>

            <div className="box">
              <p>Enter Design Photo:</p>
              <input
                type="file"
                name="productImg"
                onChange={(e) => handleImageChange(e)}
              />
            </div>

            <div className="box">
              <p>Enter Price:</p>
              <input
                name="productPrice"
                required
                onChange={(e) => handleProductData(e)}
              />
            </div>

            <div className="box">
              <p>Enter Location:</p>
              <input
                name="productLocation"
                required
                onChange={(e) => handleProductData(e)}
              />
            </div>
          </div>

          <div className="add-design-sub1">
            <div className="box">
              <p>Enter Size Of Project:</p>
              <input
                name="productSize"
                required
                onChange={(e) => handleProductData(e)}
              />
            </div>

            <input
              type="submit"
              value="Update Design"
              className="design-button"
              onClick={(e) => handleDesign(e)}
            />
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

export default UpdateDesign;

import React, { useState, useEffect } from "react";
import "./desAddProduct.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import DesignerSidebar from "../Designer_sidebar/Designer_sidebar"
import Dash_header from "../../Admin/Header/Dash_header";

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

const DesAddProduct = () => {

  const [userData, setUserData] = useState("")

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      setUserData(userData);
      // console.log(userData)
    }
  }, [])

  const id = userData.id;
  // console.log(id)


  const [productData, setProductData] = useState({
    productName: "",
    productSize: "",
    productLocation: "",
    productImg: "",
    productPrice: "",
    designerId: ""
  })

  const [productPic, setProductImg] = useState("")

  const handleProductData = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
  }

  const handleImageChange = (e) => {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append("productImg", file);

    axios.post(`http://localhost:3005/api/hsProduct/uploadProductImage`, formData)
      .then((res) => {
        // console.log(res.data.urlArray[0]);
        setProductImg(res.data.urlArray[0])
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleProduct = (e) => {
    e.preventDefault();

    setProductData({
      ...productData,
      productImg: productPic
    })

    // console.log(productData)

    axios.post(`http://localhost:3005/api/hsProduct/createProduct`, productData)
      .then((result) => {
        console.log(result)
        // alert('Design Added Successfully')
        toast.success("Design Added Successfully", toastStyle);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <DesignerSidebar />
      <section className="createDesign">
        <div className="addDesign_heder">
          <Dash_header name="Add Design" path="Designer / Add Design" />
        </div>

        <div className="add-design">
          <form>
            <div className="add-design-sub1">
              <div className="box">
                <p>Designer Id</p>
                <input
                  type="text"
                  name="designerId"
                  value={userData.id}
                  onClick={(e) => handleProductData(e)}
                />
              </div>

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
                  name="productImage"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            <div className="add-design-sub1">
              <div className="box">
                <p>Enter Price:</p>
                <input
                  type="text"
                  name="productPrice"
                  // value={price}
                  onChange={(e) => handleProductData(e)}
                  required
                />
              </div>

              <div className="box">
                <p>Enter Location:</p>
                <input
                  type="text"
                  name="productLocation"
                  // value={location}
                  onChange={(e) => handleProductData(e)}
                  required
                />
              </div>
            </div>

            <div className="add-design-sub1">

              <div className="box">
                <p>Enter Size Of Project:</p>
                <input
                  type="text"
                  name="productSize"
                  // value={size}
                  onChange={(e) => handleProductData(e)}
                  required
                />
              </div>

              <input
                type="submit"
                value="Add Design"
                className="design-button"
                onClick={(e) => { handleProduct(e) }}
              />
            </div>
          </form>
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

export default DesAddProduct;

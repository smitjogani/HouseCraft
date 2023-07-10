import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./designer_designs.css";
import DesignerSidebar from "../Designer_sidebar/Designer_sidebar"

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

const Designer_designs = () => {

  const [designData, setDesignData] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setUserData(userData);
    }

    const des_id = userData.id;
    console.log(des_id);

    axios.get(`http://localhost:3005/api/hsProduct/getproductbydesignerId/${des_id}`)
      .then((res) => {
        // console.log(res.data.projects);
        setDesignData(res.data.projects);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const history = useHistory();

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3005/api/hsProduct/DeleteProduct/${id}`)
      .then((res) => {
        // console.log(res.data.message)
        toast.success("Design Deleted", toastStyle);
      })
      .catch((err) => {
        toast.error("Delete Unsuccessful", toastStyle);
        console.log(err);
      })
  }

  const handleView = (id) => {
    history.push(`/designer_updateDesign/${id}`);
  }

  return (
    <>
      <DesignerSidebar />
      <section className="blog_main">
        <div className="blog_container">
          {!isEmpty(designData) && designData.map((item) => {
            return (
              <>

                <div class="b-container">
                  <div class="s-box">
                    <div class="s-b-img">
                      <div class="s-type">{item.productName}</div>

                      <img src={`http://localhost:3005/${item.productImg}`} />
                    </div>

                    <div class="designer_blog_text">
                      <p className="designerAbout">
                        <span>Size:</span>{item.productSize}
                      </p>
                      <p className="designerAbout">
                        <span>Location: </span>
                        {item.productLocation}
                      </p>
                      <p className="designerAbout">
                        <span>Price:</span>₹ {item.productPrice}
                      </p>
                      <div className="btn-container">
                        {/* <Link to="/designer_updateDesign"> */}
                        <button className="designerDesignEdit" onClick={() => { handleView(item._id) }}>Edit</button>
                        {/* </Link> */}
                        <button className="designerDesignEdit" onClick={() => { handleDelete(item._id) }}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div >
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

export default Designer_designs;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import "./admin_designs.css";
import Sidebar from "../Sidebar/Sidebar";

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

const Admin_Designs = () => {

  const [data, setData] = useState();
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3005/api/hsProduct/ListofProduct`)
      .then((res) => {
        console.log(res.data.result.docs)
        setData(res.data.result.docs)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3005/api/hsProduct/DeleteProduct/${id}`)
      .then((res) => {
        toast.success("Design Deleted", toastStyle);
      })
      .catch((err) => {
        toast.error("Delete Unsuccessful", toastStyle);
        console.log(err);
      })
  }

  const handleView = (id) => {
    history.push(`/Designerprofile/${id}`)
  }


  return (
    <>
      <Sidebar />

      <section className="blog_main">
        <div className="blog_container">
          {!isEmpty(data) && data.map((item) => {
            return (
              <>
                <div class="b-container">
                  <div class="s-box">
                    <div class="s-b-img">
                      <div class="s-type">{item.productName}</div>

                      <img src={`http://${item.productImg}`} />
                    </div>

                    <div class="s-b-text">
                      <p className="designerAbout">
                        <span>Size:</span>₹ {item.productSize}
                      </p>
                      <p className="designerAbout">
                        <span>Location: </span>
                        {item.productLocation}
                      </p>
                      <p className="designerAbout">
                        <span>Price:</span>₹ {item.productPrice}
                      </p>
                      <div className="admin_design_btn">
                        <button className="mainContactDesigner" onClick={() => { handleView(item.designerId) }}>
                          Designer
                        </button>
                        <button className="mainContactDesigner" onClick={() => handleDelete(item._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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

      {/* <section className="admin_design_main">
        <div className="admin_design_container">
          {!isEmpty(data) && data.map((item) => {
            return (
              <>
                <div class="admin_design_b-container">
                  <div class="admin_design_s-box">
                    <div class="admin_design_s-b-img">
                      <div class="admin_design_s-type">{item.productName}</div>

                      <img src={`http://${item.productImg}`} />
                    </div>

                    <div class="admin_design_s-b-text">
                      <p className="admin_design_designerAbout">
                        <span>Size:</span>₹ {item.productSize}
                      </p>
                      <p className="admin_design_designerAbout">
                        <span>Location: </span>
                        {item.productLocation}
                      </p>
                      <p className="admin_design_designerAbout">
                        <span>Price:</span>₹ {item.productPrice}
                      </p>
                      <div className="admin_design_btn">
                        
                          <button className="admin_design_mainContactDesigner" onClick={() =>  handleView(item._id) }>
                            Designer
                          </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

export default Admin_Designs;

{/* <button className="mainContactDesigner" onClick={() => handleDelete(item._id)}>Delete</button> */ }
import React from "react";
import "./createDesigner.css";
import Dash_header from "../Header/Dash_header";
import AdminSidebar from "../Sidebar/Sidebar"

const createDesigner = () => {
  return (
    <>
    <AdminSidebar/>
      <section className="createDesigner">
        <div className="addDesigner_heder">
          <Dash_header name="Add Designer" path="admin / Add Designer" />
        </div>

        <div className="add-designer">
          <div className="add-designer-sub1">
            <div className="box">
              <p>Enter Name:</p>
              <input label="name" name="name" required />
            </div>

            <div className="box">
              <p>Enter Mobile No:</p>
              <input label="mobileno" name="mobileno" required />
            </div>

            <div className="box">
              <p>Enter Email:</p>
              <input label="email" name="email" required />
            </div>

            <div className="box">
              <p>Enter Profile Photo:</p>
              <input type="file" label="profilepic" name="profilepic" />
            </div>

            <div className="box">
              <p>Enter Designer Type:</p>
              <select name="designerType" id="designerType">
                <option value="Architech">Architech</option>
                <option value="Interior Designer">Interior Designer</option>
              </select>
            </div>
          </div>

          <div className="add-designer-sub1">
            <div className="box">
              <p>Enter Gst no:</p>
              <input label="gst" name="gst" />
            </div>

            <div className="box">
              <p>Enter Address:</p>
              <input label="address" name="address" required />
            </div>

            <div className="box">
              <p>Enter Landmark:</p>
              <input label="landmark" name="landmark" />
            </div>

            <div className="box">
              <p>Enter City:</p>
              <input label="city" name="city" required />
            </div>
          </div>
          <div className="add-designer-sub1">
            <div className="box">
              <p>Enter State:</p>
              <input label="state" name="state" required />
            </div>

            <div className="box">
              <p>Enter Pincode:</p>
              <input label="pincode" name="pincode" required />
            </div>

            <div className="box">
              <p>Enter Country:</p>
              <input label="counry" name="country" required />
            </div>

            <input
              type="submit"
              value="Create User"
              className="designer-button"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default createDesigner;

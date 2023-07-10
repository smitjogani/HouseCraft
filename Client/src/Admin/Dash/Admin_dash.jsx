import React from "react";
import "./Admin_dash.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash"
import { ToastContainer, toast } from 'react-toastify';

import AdminSidebar from "../Sidebar/Sidebar"

import { AiFillDelete } from "react-icons/ai"

import { AiOutlineDashboard } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"
import { FiUsers } from "react-icons/fi"
import { HiUserGroup } from "react-icons/hi"
import { BiUserCircle } from "react-icons/bi"

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

const Admin_dash = () => {

  const [data, setData] = useState();
  const [flag, setFlag] = useState(true);
  const [noOfArchitect, setNoOfArchitect] = useState();
  const [noOfInteriorDesigner, setNoOfInteriorDesigner] = useState();
  const [noOfUser, setNoOfUser] = useState();
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3005/api/hsuser/ListofUsers")
      .then((res) => {
        // console.log(res.data.result.docs)
        setData(res.data.result.docs)
        setFilterData(res.data.result.docs);
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(`http://localhost:3005/api/hsarchitect/NumberOfArchitect`)
      .then((res) => {
        const noOfArchitect = res.data.count_data[0].architect;
        setNoOfArchitect(noOfArchitect)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(`http://localhost:3005/api/hsinteriordesigner/NumberOfInteriorDesigner`)
      .then((res) => {
        const noOfInteriorDesigner = res.data.count_data[0].InteriorDesigner;
        setNoOfInteriorDesigner(noOfInteriorDesigner)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`http://localhost:3005/api/hsuser/NumberOfUser`)
      .then((res) => {
        const noOfUser = res.data.count_data[0].user;
        setNoOfUser(noOfUser)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })


  }, [flag])

  const handleDelete = (id) => {
    // console.log(id);

    axios.delete(`http://localhost:3005/api/hsuser/DeleteUser/${id}`)
      .then((res) => {
        // console.log(res.data.messages)        
        setFlag(!flag)
        // alert("User Deleted")
        toast.success("User Deleted", toastStyle);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Delete Unsuccessful", toastStyle);
      })
  }

  const handleSearch = (e) => {
    // e.preventDefault();
    const getSearch = e.target.value;
    // setQuery(getSearch);
    // console.log(getSearch);

    if (getSearch.length > 0) {
      const searchData = data.filter((item) => item.userName.toLowerCase().includes(getSearch));
      setData(searchData);
    }
    else {
      setData(filterData);
    }
    setQuery(getSearch);
  }

  return (
    <>
      <AdminSidebar />
      <section class="dashboard">
        <div class="dash-content">

          <div class="overview">
            <div class="dash_title">
              <i className="dash_icon"> <AiOutlineDashboard /></i>
              <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
              <div class="box box1">
                <i className="box_icon"><FiUsers /></i>
                <span class="text">Interior Designers</span>
                <span class="number">{noOfInteriorDesigner}</span>
              </div>
              <div class="box box2">
                <i className="box_icon"><HiUserGroup /></i>
                <span class="text">Architects</span>
                <span class="number">{noOfArchitect}</span>
              </div>
              <div class="box box3">
                <i className="box_icon"><BiUserCircle /></i>
                <span class="text">Users</span>
                <span class="number">{noOfUser}</span>
              </div>
            </div>
          </div>

          <div class="activity">
            <div class="dash_title">
              <i className="dash_icon"><BiTimeFive /></i>
              <span class="text">Recent Users</span>
            </div>
            <form className="searchBar">
              <input type="text" placeholder="Search" name="name" value={query} onChange={(e) => handleSearch(e)} />
            </form>
            <div class="activity-data">

              <table width="100%">
                <tbody>
                  <tr className="tableRawHeader">
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Joined</td>
                    <td className="tblIcon"><AiFillDelete /></td>
                  </tr>

                  {!isEmpty(data) && data.map((item, index) => {
                    return (
                      <>
                        <tr className="tableRawBody">
                          <td>{index + 1}</td>
                          <td>{item.userName}</td>
                          <td>{item.userEmail}</td>
                          <td>{item.createdAt}</td>

                          <td className="d-flex">
                            <button className="adminDesignerBtn" onClick={() => handleDelete(item._id)}>Delete</button>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
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

export default Admin_dash;

import React from "react";
import "./designer_dashboard.css";
import DesignerSidebar from "../Designer_sidebar/Designer_sidebar"

import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash"

import { AiOutlineDashboard } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdDesignServices } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const Designer_dashboard = () => {

  const [data, setData] = useState();
  const [flag, setFlag] = useState(true);
  const [noOfUser, setNoOfUser] = useState();
  const [noOfProduct, setNoOfProduct] = useState();
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


    axios.get(`http://localhost:3005/api/hsuser/NumberOfUser`)
      .then((res) => {
        const noOfUser = res.data.count_data[0].user;
        setNoOfUser(noOfUser)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`http://localhost:3005/api/hsProduct/NumberOfProduct`)
      .then((res) => {
        const noOfProduct = res.data.count_data[0].product;
        setNoOfProduct(noOfProduct)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })

  }, [flag])

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
      <DesignerSidebar />
      <section class="dashboard">
        <div class="dash-content">
          <div class="overview">
            <div class="dash_title">
              <i className="dash_icon">
                {/* {" "} */}
                <AiOutlineDashboard />
              </i>
              <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
              <div class="box box1">
                <i className="box_icon">
                  <FiUsers />
                </i>
                <span class="text">Users</span>
                <span class="number">{noOfUser}</span>
              </div>
              <div class="box box2">
                <i className="box_icon">
                  <MdDesignServices />
                </i>
                <span class="text">Designs</span>
                <span class="number">{noOfProduct}</span>
              </div>
              <div class="box box3">
                <i className="box_icon">
                  <FaRupeeSign />
                </i>
                <span class="text">Earning</span>
                <span class="number">0</span>
              </div>
            </div>
          </div>

          <div class="activity">
            <div class="dash_title">
              <i className="dash_icon">
                <BiTimeFive />
              </i>
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
                  </tr>

                  {!isEmpty(data) && data.map((item, index) => {
                    return (
                      <>
                        <tr className="tableRawBody">
                          <td>{index + 1}</td>
                          <td>{item.userName}</td>
                          <td>{item.userEmail}</td>
                          <td>{item.createdAt}</td>
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
    </>
  );
};

export default Designer_dashboard;

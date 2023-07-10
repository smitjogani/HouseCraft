import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./admin_designers.css";
import Dash_header from "../Header/Dash_header";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { isEmpty } from "lodash";
import AdminSidebar from "../Sidebar/Sidebar"

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

const Admin_Designers = () => {

  const history = useHistory();

  const [data, setData] = useState();
  const [flag, setFlag] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3005/api/hsarchitect/ListofArchitect").then((response) => {
      // console.log(response.data.result.docs)
      setData(response.data.result.docs)
      setFilterData(response.data.result.docs)
    }).catch((err) => {
      console.log(err);
    })
  }, [flag])


  const handeDelete = (id) => {
    axios.delete(`http://localhost:3005/api/hsarchitect/DeleteArchitect/${id}`)
    .then((response) => {
      // console.log(response.data.message)
      if (response.data.message) {
        setFlag(!flag)
        // alert("Architect Deleted");
        toast.success("Architect Deleted", toastStyle);
      }
    })
    .catch((err) => {
      toast.error("Delete Unsuccessful", toastStyle);
      console.log(err);
    })

  }

  const handleView = (id) => {
    history.push(`/architect_profile/${id}`);
  }

  const handleSearch = (e) => {
    // e.preventDefault();
    const getSearch = e.target.value;
    // setQuery(getSearch);
    // console.log(getSearch);

    if (getSearch.length > 0) {
      const searchData = data.filter((item) => item.architectName.toLowerCase().includes(getSearch));
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
      <section className="admin_designer_table">

        <Dash_header name="Designer" path="admin / Architects" />
        {/* <button className="report-btn" onClick={() => window.print()}>Generate Report</button> */}
        <form className="searchBar">
          <input type="text" placeholder="Search" name="name" value={query} onChange={(e) => handleSearch(e)} />
        </form>
        <div className="designerTable">
          <table className="mainAdminTable" width="100%">
            <tbody className="adminDesigneTableBody">
              <tr className="tableRawHeader">
                <td>Id</td>
                <td>Profile</td>
                <td>Name</td>
                <td>Type</td>
                <td>Email</td>
                <td>Date</td>
                <td>Country</td>
                <td>Operaction</td>
              </tr>

              {!isEmpty(data) && data.map((item, index = 0) => {
                // console.log(item)
                return (
                  <tr className="tableRawBody" key={item._id}>
                    <td>{index + 1}</td>
                    <td className="table_profile_img">
                      <img src={`http://${item.architectProfile}`} alt="" />
                    </td>
                    <td>{item.architectName
                    }</td>
                    <td>{item.type}</td>
                    <td>{item.architectEmail}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.architectCountry}</td>
                    <td className="d-flex">

                      <button className="adminDesignerBtn" onClick={() => handleView(item._id)}>View</button>

                      <button className="adminDesignerBtn" onClick={() => handeDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default Admin_Designers;

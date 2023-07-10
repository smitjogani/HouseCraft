import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";
import { ToastContainer, toast } from 'react-toastify';

import AdminSidebar from "../../Sidebar/Sidebar"
import "./interior.css"
import Dash_header from "../../Header/Dash_header";

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

const Interior = () => {

    const history = useHistory();

    const [data, setData] = useState();
    const [flag, setFlag] = useState(true);
    const [filterData, setFilterData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3005/api/hsinteriordesigner/ListofInteriorDesigner").then((response) => {
            console.log(response.data.result.docs)
            setData(response.data.result.docs)
            setFilterData(response.data.result.docs);
        }).catch()
    }, [flag])


    const handleDelete = (id) => {
        console.log(id)

        axios.delete(`http://localhost:3005/api/hsinteriordesigner/DeleteInteriorDesigner/${id}`).then((response) => {
            console.log(response.data.message)

            setFlag(!flag)
            // alert("Interior Designer Deleted");
            toast.success("Interior Designer Deleted", toastStyle);

        }).catch((err)=>{
            toast.error("Delete Unsuccessful", toastStyle);
            console.log(err);
        })

    }

    const handleView = (id) => {
        // console.log(id)
        history.push(`/InteriorProfile/${id}`);
    }

    const handleSearch = (e) => {
        // e.preventDefault();
        const getSearch = e.target.value;
        // setQuery(getSearch);
        // console.log(getSearch);

        if (getSearch.length > 0) {
            const searchData = data.filter((item) => item.interiorDesignerName.toLowerCase().includes(getSearch));
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
                <>
                    <Dash_header name="Designer" path="admin / Interior Designers" />
                    {/* <button className="report-btn" onClick={() => window.print()}>Generate Report</button> */}
                    <form className="searchBar">
                        <input type="text" placeholder="Search" name="name" value={query} onChange={(e) => handleSearch(e)} />
                    </form>
                </>
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

                            {!isEmpty(data) && data.map((itm, index) => {
                                // console.log(item)
                                return (
                                    <tr className="tableRawBody" key={itm._id}>
                                        <td>{index + 1}</td>
                                        <td className="table_profile_img">
                                            <img src={`http://${itm.interiorDesignerProfile}`} alt="" />
                                        </td>
                                        <td>{itm.interiorDesignerName}</td>
                                        <td>{itm.type}</td>
                                        <td>{itm.interiorDesignerEmail}</td>
                                        <td>{itm.createdAt}</td>
                                        <td>{itm.interiorDesignerCountry}</td>
                                        <td className="d-flex">

                                            <button className="adminDesignerBtn" onClick={() => handleView(itm._id)}>View</button>

                                            <button className="adminDesignerBtn" onClick={() => handleDelete(itm._id)}>Delete</button>

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
    )
}

export default Interior
import React, { useState, useEffect } from "react";
import "./Admin_chart.css";

import Dash_header from "../Header/Dash_header";
import AdminSidebar from "../Sidebar/Sidebar"

import Chart from "react-apexcharts";
import axios from "axios";

const Admin_chart = () => {

  const [noOfArchitect, setNoOfArchitect] = useState([]);
  const [noOfInteriorDesigner, setNoOfInteriorDesigner] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3005/api/hsinteriordesigner/NumberOfInteriorDesigner`)
      .then((res) => {
        const noOfInteriorDesigner = res.data.count_data[0].InteriorDesigner;
        setNoOfInteriorDesigner(noOfInteriorDesigner)
        console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`http://localhost:3005/api/hsarchitect/NumberOfArchitect`)
      .then((res) => {
        const noOfArchitect = res.data.count_data[0].architect;
        setNoOfArchitect(noOfArchitect)
        console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // console.log(noOfInteriorDesigner)
  // console.log(noOfArchitect)

  return (
    <>
      <AdminSidebar />
      <section className="admin_chart">
        <div className="charts_heder">
          <Dash_header name="Charts" path="admin / Charts" />
        </div>
        <div className="charts">
          <div className="bar-chart">

            <Chart
              type="bar"
              width={900}

              series={[
                {
                  name:"Architect",
                  data:[noOfArchitect]
                },  
                {
                  name: "Interior Designer",
                  data: [noOfInteriorDesigner]
                },

              ]}

              options={{
                colors: ["#000000", "#38d16a"],
                xaxis:{
                  tickPlacement: "on",
                  categories:["Designer"],
                }
              }}
            ></Chart>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin_chart;

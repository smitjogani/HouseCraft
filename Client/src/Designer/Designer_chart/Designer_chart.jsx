import React, { useEffect, useState } from "react";
import "./designer_chart.css";
import DesignerSidebar from "../Designer_sidebar/Designer_sidebar"
import axios from "axios";
import Header from "../../Admin/Header/Dash_header";
import Chart from "react-apexcharts";

const Designer_chart = () => {

  const [user, setUser] = useState("");
  const [design, setDesign] = useState("");

  useEffect(() => {

    axios.get(`http://localhost:3005/api/hsuser/NumberOfUser`)
      .then((res) => {
        const user = res.data.count_data[0].user;
        setUser(user)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`http://localhost:3005/api/hsProduct/NumberOfProduct`)
      .then((res) => {
        const design = res.data.count_data[0].product;
        setDesign(design)
        // console.log(res.data.count_data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // console.log(user);
  // console.log(design)

  return (
    <>
      <DesignerSidebar />
      <section className="designerChart">
        <div className="chartHeader">
          <Header name="Charts" path="Designer / Charts" />
        </div>
        <div className="designerCharts">
          <div className="pieChart">
            <Chart
              type="pie"
              width={700}

              series={[design, user]}

              options={{
                colors: ["#000000", "#38d16a"],
                title: { text: "Total Designs and Users" },
                noData: "Empty Data",
                labels: ['Designs', 'Users']
              }}

            ></Chart>
          </div>
        </div>
      </section>
    </>
  );
};

export default Designer_chart;

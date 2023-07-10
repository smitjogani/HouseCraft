import React, { useEffect, useState } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "./report.css";
import { ToastContainer, toast } from 'react-toastify';
// import reportData from "./ReportData";
import AdminSidebar from "../Sidebar/Sidebar";
import axios from "axios"

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


const Report = () => {

  const [data, setData] = useState();
  const [idesigner, setIdesigner] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3005/api/hsinteriordesigner/ListofInteriorDesigner`)
      .then((res) => {
        // console.log(res.data.result.docs)
        setIdesigner(res.data.result.docs)
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(`http://localhost:3005/api/hsuser/ListofUsers`)
      .then((res) => {
        // console.log(res.data.result.docs)
        setUser(res.data.result.docs)

      })
      .catch((err) => {
        console.log(err);
      })

    axios.get(`http://localhost:3005/api/hsarchitect/ListofArchitect`)
      .then((res) => {
        // console.log(res.data.result.docs)
        setData(res.data.result.docs)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  const exportToCVS = () => {
    toast.success("Report Generated", toastStyle);

    const fileType = "xlsx";
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { architect: ws }, SheetNames: ["architect"] };
    const exelbuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const fdata = new Blob([exelbuffer], { type: fileType });

    FileSaver.saveAs(fdata, "Architects" + ".xlsx")
  };

  const exportToCVS2 = () => {
    toast.success("Report Generated", toastStyle);

    const fileType = "xlsx";
    const ws = XLSX.utils.json_to_sheet(idesigner);
    const wb = { Sheets: { interiordesigner: ws }, SheetNames: ["interiordesigner"] };
    const exelbuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const fdata = new Blob([exelbuffer], { type: fileType });

    FileSaver.saveAs(fdata, "InteriorDesigner" + ".xlsx")
  };

  const exportToCVS3 = () => {
    toast.success("Report Generated", toastStyle);

    const fileType = "xlsx";
    const ws = XLSX.utils.json_to_sheet(user);
    const wb = { Sheets: { user: ws }, SheetNames: ["user"] };
    const exelbuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const fdata = new Blob([exelbuffer], { type: fileType });

    FileSaver.saveAs(fdata, "User" + ".xlsx")
  };

  return (
    <>
      <AdminSidebar />
      <section className="reportBody">
        <button onClick={exportToCVS} className="report-btn">
          Architects Report
        </button>

        <button onClick={exportToCVS2} className="report-btn">
          Interior Designer Report
        </button>

        <button onClick={exportToCVS3} className="report-btn">
          User Report
        </button>
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

export default Report;

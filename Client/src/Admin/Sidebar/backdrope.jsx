import React from "react";
import "./sidebar.css";

const backdrope = ({ Sidebar, closeSidebar }) => {
  return (
    <div
      className={Sidebar ? "backdrope backdrope--open" : "backdrope"}
      onClick={closeSidebar}
    ></div>
  );
};

export default backdrope;
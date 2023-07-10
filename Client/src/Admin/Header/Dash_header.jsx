import React from "react";
import "./dash_header.css";

function Dash_header({ name, path }) {
  return (
    <div className="dash_header">
      <div className="dash_header_name">
        <div className="Ddash_header-name">{name}</div>

        <div className="dash_header-path">{path}</div>
      </div>
    </div>
  );
}

export default Dash_header;

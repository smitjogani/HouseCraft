import React, { useState } from "react";
import "./faq.css";
import AdminSidebar from "../Sidebar/Sidebar"
import Data from "./Data";

const Faq = () => {
  const [accordian, setActiveAccordian] = useState(-1);

  function toggleAccordian(index) {
    if (index === accordian) {
      setActiveAccordian(-1);
    } else {
      setActiveAccordian(index);
    }
  }

  return (
    <>
    <AdminSidebar/>
      <div className="faq_container">
        <div>
          <span className="accordian_title">Frequently Asked Quections</span>
          <h1 className="faq_header">Lets Answer Some of Your Quection</h1>
        </div>
        <div className="accordian_faq">
          {Data.map((d, index) => {
            return (
              <>
                <div key={index} onClick={() => toggleAccordian(index)}>
                  <div className="accordian_heading">
                    <h3 id="faq_h3" className={accordian === index ? "active" : ""}>
                      {d.title}
                    </h3>
                    <div>
                      {accordian === index ? (
                        <>
                          <span className="verticle">-</span>
                        </>
                      ) : (
                        <>
                          <span className="verticle">+</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="faq_detail">
                    <p id="faq_desc" className={accordian === index ? "active" : "inactive"}>
                      {d.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;

import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
    
      <section className="contact_main">
        <div className="contact_header">
          <h1 className="contact_heading">Contact Us</h1>
          <p className="contact_desc">
            We will be happy to assist you with any question ragarding House
            Craft.
          </p>
        </div>

        <div className="contactform_container">
          <h1 className="form_header">Send a message to us!</h1>
          <form className="contact_form">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className="contactform_btn">Send Message</button><br /><br />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

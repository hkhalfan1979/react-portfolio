import React from "react";
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

function Contact() {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row mx-0">
        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            Connect
          </h3>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Contact;

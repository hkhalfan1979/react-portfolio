import React from "react";
import "./style.css";
import ResumePDF from "../../components/ResumePDF/Hasnain_Khalfan_Resume_2022.pdf";

function Resume() {

    return (
      <div className="viewFour" id="resume">
        <div className="row">
          <div className="col-md-12 text-center">
            <a href={ResumePDF} target="_blank" className="resLink"><h3 className="viewTitle" id="resumeTitle">RESUME</h3></a>
          </div>
        </div>
      </div>
    );
}

export default Resume;
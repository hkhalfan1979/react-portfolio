import React from "react";
import "./style.css";

function SocialLinks() {
  return (
    <div className="row">
    <div className="row m-0">
      <div className="col-sm-12 text-center fluid">
        <h5 className="email">hkhalfan@gmail.com</h5>
      </div>
    </div>
    <div className="row m-0">
      <div className="col-sm" />
      <div className="col-sm text-center">
        <a href="https://github.com/hkhalfan1979" target="_blank"><i className="fab fa-github-square fa-3x" /></a>
        <a href="https://www.linkedin.com/in/hasnain-khalfan-39643a7/" target="_blank"><i className="fab fa-linkedin fa-3x" /></a>
      </div>
      <div className="col-sm" />
    </div>
  </div>
  )
}

export default SocialLinks;
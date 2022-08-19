import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="row" id="/">
      <NavBar />
      <h3>intro section</h3>
    </div>
  );
}

export default MainPage;
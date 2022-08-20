import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="row" id="hero-section">
      <NavBar />

      <div className="col-md-12">
        <div className="mobile-image"></div>
        <div className="intro-text">
          <h2 className="mobile-title">Hasnain Khalfan</h2>
          <br />
          <h2 className="intro">Senior Developer</h2>
          <br />
          <h3>Experienced Digital Marketing Manager with extensive experience building, maintaining, and running successful digital marketing campaigns.</h3>
          <br />
          <Link to="about"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="readMore btn btn-info">
              Read More about me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
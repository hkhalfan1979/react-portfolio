import React from "react";
import MyProfileImg from "../../img/my-profile-pic.jpeg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md-4">
                    <img src={MyProfileImg} className="img-fluid" alt="Hasnain Khalfan"></img>
                </div>
                <div className="col-md-8">
                    <h3>about</h3>
                    
                </div>
            </div>
        </div>
    )
}

export default About;
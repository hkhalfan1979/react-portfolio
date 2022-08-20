import React from "react";
import MeOnWater from "../../img/my-profile-pic.jpeg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT ME</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Experienced Digital Marketing Manager with extensive experience building, maintaining, and running successful digital marketing campaigns. Bringing forth broad marketing knowledge, coupled with focused campaign experience. Adept at creating and implementing client-centered, successful campaigns, aimed at improving brand awareness and presence. Collaborative and creative manager accomplished at managing digital marketing presence content. Experienced in leading teams of marketing professionals to meet and exceed digital marketing goals.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">Adobe Creative Suite</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                            </ul>
                        </p>
                        <p className="bio">Feel free to connect with me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
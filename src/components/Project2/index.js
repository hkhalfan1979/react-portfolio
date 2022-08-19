import React, { useState } from "react";
import projects from "../../projects.json";
import "./style.css";

function Project2() {

  function checkRepoLink(project) {
    if (project.repo !== null) {
      return (
        <div className="row">
          <h4>Repo and website links</h4>
        </div>
      );
    } else {
      return (
        <div className="row">
        <h4>website links</h4>
      </div>
      );
    }
  };

  return projects.map((project) => {
    return ( 
    <div className="row">
      <h3>project details</h3>
    </div>
    );
  });
}
//need to import the reactstrap button (1 for site, 1 for repo, 1 for the toggle)

export default Project2;

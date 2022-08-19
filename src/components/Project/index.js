import React from "react";
import projects from "../../projects.json";

// need to change the list items for the technologies to a function
// change this so that all images render on one side
function Project() {
    return projects.map(project => {
        // project is an even number, it will image left and text right
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (
                
            )
            // otherwise image will be right and text left
        } else {
            return (
                
            )
        }
    })
}

export default Project;
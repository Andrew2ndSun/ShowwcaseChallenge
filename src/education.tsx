import {Education} from "./educationlist";
import React from "react";
import "./education.css"

function Edu(props:{education:Education}){
    let education= props.education
    return(
        <div className={"education-pane"}>
            <h2 className={"education-name"}>School: {education.schoolName}</h2>
            <h3 className={"education-primary-info"}>Degree: {education.degree} Major: {education.major} </h3>
            <h4 className={"education-secondary-info"}>Start Year: {education.startYear} End Year: {education.endYear} GPA: {education.gpa} </h4>
            <p className={"education-description"}>{education.description}</p>
           
        </div>
    )
}
export default Edu
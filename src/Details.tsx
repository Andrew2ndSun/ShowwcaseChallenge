import React, { useState } from 'react';
import {educationlist, Education} from './educationlist';
import Edu from "./education";
import ReactDOM from "react-dom";

class Details extends React.Component {

    componentDidMount() {
        educationlist.addListener((e:Education)=>{ 
        let container=document.getElementById("education-container") 
        let temp = document.createElement("div")
        ReactDOM.render(<Edu education={e}/>, temp)
        container?.appendChild(temp)  
        })
    }

    render() {
        return(
        <div>
            <h1>Details</h1>
            <div id="education-container">
                
            </div>
        </div>  )  
    }
};

export default Details;
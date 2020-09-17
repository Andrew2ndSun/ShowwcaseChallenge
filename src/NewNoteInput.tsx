import React, { ChangeEvent } from "react";
import { Row, Col } from "react-bootstrap";
import {educationlist} from "./educationlist";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
    educationlist.addEducation({
      schoolName:(document.getElementById("name") as HTMLInputElement).value,
      degree:(document.getElementById("degree") as HTMLInputElement).value,
      major:(document.getElementById("major") as HTMLInputElement).value,
      startYear:Number((document.getElementById("ys") as HTMLInputElement).value),
      endYear:Number((document.getElementById("ye") as HTMLInputElement).value),
      gpa:Number((document.getElementById("gpa") as HTMLInputElement).value),
      description:(document.getElementById("des") as HTMLInputElement).value ?? undefined
    });
    return false;
  };

  return (
    <div>
      <div id="survey-container">
        <p id="description">Fill in the form to add your education</p>
        <form id="survey-form">
          {/* name */}
          <label id="name-label" className="row-label" htmlFor="name">Name of School</label>
          <input onChange={updateNote}
            id="name"
            value={note} className="row-input" type="text" placeholder="Enter School's name" required />
          {/* email */}
          <Row>
            <Col>
            <label className="row-label" htmlFor="degree">Degree</label>
          <select id="degree" className="row-input" required>
            <option disabled selected>Select an option</option>
            <option value="associate">Associate's</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PHD</option>
          </select>
            </Col>
            <Col>
              <label id="major-label" className="row-label" htmlFor="email">Major</label>
              <input id="major" className="row-input" type="text" placeholder="Enter your major" required />
            </Col>
            <Col>
              <label id="ys-label" className="row-label" htmlFor="yearStart">Year start</label>
              <input id="ys" className="row-input" type="number" placeholder="Enter year start" required />
            </Col>
            <Col>
              <label id="ye-label" className="row-label" htmlFor="yearEnd">Year end</label>
              <input id="ye" className="row-input" type="number" placeholder="Enter year end" required />
            </Col>
            <Col>
              <label id="gpa-label" className="row-label" htmlFor="gpa">GPA</label>
              <input id="gpa" className="row-input" type="number" placeholder="Enter GPA" required />
            </Col>
          </Row>
          
          <label id="des-label" className="row-label">Description (Optional)</label>
          <input id="des" className="row-input" type="text" />
          
          <button id="submit" onClick={onAddNoteClick}>Save</button>
        </form>
      </div>

    </div>
    
  );
};

    

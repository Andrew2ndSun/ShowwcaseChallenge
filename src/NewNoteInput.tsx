import React, { ChangeEvent } from "react";
import { Row, Col } from "react-bootstrap";

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
  };

  return (
    <div>
      <div id="survey-container">
        <p id="description">Fill in the form to add your education</p>
        <form id="survey-form">
          {/* name */}
          <label id="name-label" className="row-label" htmlFor="name">Name of School</label>
          <input id="name" className="row-input" type="text" placeholder="Enter School's name" required />
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
              <label id="email-label" className="row-label" htmlFor="email">Year start</label>
              <input id="email" className="row-input" type="number" placeholder="Enter year start" required />
            </Col>
            <Col>
              <label id="email-label" className="row-label" htmlFor="email">Year end</label>
              <input id="email" className="row-input" type="number" placeholder="Enter year end" required />
            </Col>
            <Col>
              <label id="email-label" className="row-label" htmlFor="email">GPA</label>
              <input id="email" className="row-input" type="number" placeholder="Enter GPA" required min={1} max={4} />
            </Col>
          </Row>
          {/* Description */}
          <label id="number-label" className="row-label">Description (Optional)</label>
          <input id="Description" className="row-input" type="text"/>
          <input
            onChange={updateNote}
            value={note}
            type="text"
            name="note"
            placeholder="Note"
          />
          <button id="submit" onClick={onAddNoteClick}>Save</button>
        </form>
      </div>

    </div>
  );
};

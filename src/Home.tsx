import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { NotesState } from './notesReducer';
import { useSelector, useDispatch } from "react-redux";
import { addNote, addName, resetNote } from "./actions";

const Home: React.FC = () => {

    const [studentName, setName] = React.useState("");
    const updateName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const dispatch = useDispatch();


    const onAddNameClick = () => {
        addName(studentName);
        dispatch(addName(studentName))
        dispatch(resetNote(""))
    };

    return (
        <div className="App">
            <div id="survey-container">
                <h1 id="title">Hi there! Welcom to your education showcase</h1>
                <p id="description">Type your name and click "Enter" below to begin!</p>
                <form id="survey-form">
                    {/* name */}
                    <label id="name-label" className="row-label" htmlFor="name">Name:</label>
                    <input
                        onChange={updateName}
                        name="studentName"
                        id="name" className="row-input" type="text" placeholder="Enter your name" required />
                    {/* submit button */}
                    <Link to="/main" ><button onClick={onAddNameClick} id="submit" type="submit">Enter</button></Link>
                </form>
            </div>
        </div>
    );
}

export default Home;

import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

const History: React.FC = () => {
    const notes = useSelector<NotesState, NotesState["notes"]>(
        (state) => state.notes
    );
    const dispatch = useDispatch();

    const onAddNote = (note: string) => {
        dispatch(addNote(note));
    };

    return (
        <div className="sidebar">
            <img alt="logo" height={200} src="https://www.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png" width={200} />
            <ul>
                {notes.map((note) => {
                    return <li key={note} className="listItemA">
                        <a href="#"><img alt="icon" height={40} src="http://www.iconsdb.com/icons/preview/black/circle-xxl.png" width={40} />{note}</a></li>;

                })}
            </ul>
        </div>



    );
};

export default History;
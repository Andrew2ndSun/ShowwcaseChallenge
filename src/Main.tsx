import React, { useState } from 'react';

import Modal from './Modal';
import ModalContent from './ModalContent';
import Details from './Details';
import History from './History';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";

const Main: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const notes = useSelector<NotesState, NotesState["notes"]>(
        (state) => state.notes
    );

    const studenName = useSelector<NotesState, NotesState["studentName"]>(
        (state) => state.studentName
    );

    return (
        <div>
            <h1 id="title">Welcom to {studenName}'s education page.</h1>
            <button id="submit" type="submit" onClick={() => setModalOpen(true)}>Add new education</button>
           
            <Row>
                <Col><History /></Col>
                <Col><Details /></Col>
            </Row>

            <Modal modalOpen={modalOpen}>
                <ModalContent setModalOpen={setModalOpen} />
            </Modal>
            

        </div>
    );
};

export default Main;
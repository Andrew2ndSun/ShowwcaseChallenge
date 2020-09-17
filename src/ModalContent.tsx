import React from 'react';
import styled from 'styled-components';
import { NewNoteInput } from './NewNoteInput';
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "./actions";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    margin-bottom: 20px;
  }
`;

type Props = {
  setModalOpen: any;
};



const ModalContent: React.FC<Props> = ({ setModalOpen }) => {

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (

    <div>
      <button style={{ position: "relative", alignItems: "right" }} onClick={() => setModalOpen(false)}>Close</button>
      <Wrapper>
        <NewNoteInput addNote={onAddNote} />
      </Wrapper>
    </div>
  );
}

export default ModalContent;
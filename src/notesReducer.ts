import { ADD_NOTE, ADD_NAME, RESET_NOTE } from "./actions"

export interface NotesState {
  studentName: string,
  notes: Object[]
}

const initialState = {
  studentName: "",
  notes: []
}

export const notesReducer = (state:NotesState = initialState, action) => {
  
  let education;
  let educationIndex;

  switch(action.type){
    case ADD_NOTE: {
      education = [...state.notes];
      return {...state, notes: [...state.notes, action.payload]}
    }
    case ADD_NAME:{
      return {...state, studentName: action.payload}
    }
    case RESET_NOTE:{
      return {...state, notes: []}
    }
    default:
      return state
  }
}
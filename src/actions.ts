// export type Action = { type: "ADD_NOTE"; payload: string };

// export const addNote = (note: string): Action => ({
//   type: "ADD_NOTE",
//   payload: note,
// });


export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NAME = 'ADD_NAME';

export const addNote = note => {
  return {
    type: "ADD_NOTE",
    payload: note,
  }
};

export const addName = name => {
  return {
    type: "ADD_NAME",
    payload: name,
  }
};

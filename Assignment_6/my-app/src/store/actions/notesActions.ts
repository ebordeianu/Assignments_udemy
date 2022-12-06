import { DispatchType, INote, NoteAction } from '../../interfaces_and_types';
import { ACTION_NAME } from './actionTypes';

// export const addNote = (note: INote) => {
//   return {
//     type: ACTION_NAME.ADD_NOTE,
//     payload: note,
//   };
// };

// export const deleteNote = (note: INote) => {
//   return {
//     type: ACTION_NAME.ADD_NOTE,
//     payload: note,
//   };
// };

// export const editNote = (id: number) => {
//   return {
//     type: ACTION_NAME.EDIT_NOTE,
//     payload: id,
//   };
// };

// export const updateNote = (id: number, data: any) => {
//   console.log(`id=${id}, data=${data}`);
//   return {
//     type: ACTION_NAME.EDIT_NOTE,
//     payload: id,
//     data,
//   };
// };

export function addNote(note: INote) {
  const action: NoteAction = {
    type: ACTION_NAME.ADD_NOTE,
    note,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function deleteNote(note: INote) {
  const action: NoteAction = {
    type: ACTION_NAME.DELETE_NOTE,
    note,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

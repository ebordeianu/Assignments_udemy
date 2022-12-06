import { INote, NoteAction, NoteState } from '../../interfaces_and_types';
import { ACTION_NAME } from '../actions/actionTypes';

const initialState: NoteState = {
  notes: [
    {
      id: 1,
      title: 'note 1',
      message: 'Note 1 message',
    },
    {
      id: 2,
      title: 'note 2',
      message: 'Note 2 message',
    },
  ],
};

export const notesReducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case ACTION_NAME.ADD_NOTE:
      const newNote: INote = {
        id: Math.random(),
        title: action.note.title,
        message: action.note.message,
      };
      return {
        ...state,
        notes: state.notes.concat(newNote),
      };
    case ACTION_NAME.DELETE_NOTE:
      const notesAfterDeleting: INote[] = state.notes.filter(
        (note) => note.id !== action.note.id
      );
      return {
        ...state,
        notes: notesAfterDeleting,
      };

    // case ACTION_NAME.EDIT_NOTE:
    //   return state.map((note: { editing: any; id: any }) =>
    //     note.id === action.payload
    //       ? {
    //           ...note,
    //           editing: !note.editing,
    //         }
    //       : note
    //   );
    // case ACTION_NAME.UPDATE_NOTE:
    //   return state.map((note: { editing: any; id: any }) => {
    //     if (note.id === action.payload) {
    //       console.log(`act.payload=${action.payload}`);
    //       return {
    //         ...note,
    //         title: action.data.newTitle,
    //         message: action.data.newMessage,
    //         editing: !note.editing,
    //       };
    //     } else {
    //       return note;
    //     }
    //   });
    default:
      return state;
  }
};

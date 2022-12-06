import { INote } from '../../interfaces_and_types';

export type NoteProps = {
  note: INote;
  deleteNote: (note: INote) => void;
};

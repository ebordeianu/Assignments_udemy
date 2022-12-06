import { INote } from '../../interfaces_and_types';

export type AddNoteProps = {
  saveNote: (note: INote | any) => void;
};

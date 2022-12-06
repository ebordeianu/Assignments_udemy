export interface INote {
  id: number;
  title: string;
  message: string;
}

export type NoteState = {
  notes: INote[];
};

export type NoteAction = {
  type: string;
  note: INote;
};

export type DispatchType = (args: NoteAction) => NoteAction;

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { INote } from '../../interfaces_and_types';
import { NoteProps } from './interface';

export default function Note({ note, deleteNote }: NoteProps) {
  const dispatch: Dispatch<any> = useDispatch();

  const removeNote = useCallback(
    (note: INote) => dispatch(deleteNote(note)),
    [dispatch, deleteNote]
  );

  return (
    <div>
      <>
        <h2>{note.title}</h2>
        <p>{note.message}</p>
      </>
      <button onClick={() => removeNote(note)}>Delete note</button>
    </div>
  );
}

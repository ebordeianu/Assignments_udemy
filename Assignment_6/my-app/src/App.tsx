import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import './App.css';
import AddNote from './components/AddNote';
import Note from './components/Note';
import { INote, NoteState } from './interfaces_and_types';
import { addNote, deleteNote } from './store/actions/notesActions';

function App() {
  const notes: INote[] = useSelector(
    (state: NoteState) => state.notes,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveNote = useCallback(
    (note: INote) => dispatch(addNote(note)),
    [dispatch]
  );

  return (
    <div>
      <h1>Notes with Redux</h1>
      <AddNote saveNote={saveNote} />
      <>
        {notes?.map((note: INote) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </>
    </div>
  );
}

export default App;

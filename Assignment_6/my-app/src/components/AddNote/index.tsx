import { useState } from 'react';
import { INote } from '../../interfaces_and_types';
import { AddNoteProps } from './interface';

export default function AddNote({ saveNote }: AddNoteProps) {
  const [note, setNote] = useState<INote | {}>();

  const handleNoteOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNote({
      ...note,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewNoteOnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveNote(note);
  };

  return (
    <form onSubmit={addNewNoteOnSubmitForm}>
      <input
        type='text'
        id='title'
        placeholder='Title'
        onChange={handleNoteOnChange}
      />
      <textarea
        id='message'
        placeholder='Title'
        onChange={handleNoteOnChange}
      />
      <button disabled={note === undefined ? true : false}>Add note</button>
    </form>
  );
}

import React from 'react';
import { Wrapper, NotesWrapper } from './Notes.styles.js';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Header } from 'components/atoms/Header/Header.js';
import { GridBox } from 'views/ArticleDetails/ArticleDetails.styles.js';
import Note from 'components/molecules/Note/Note.js';
import NoteForm from 'components/organisms/NoteForm/NoteForm.js';
import { useAuth } from 'hooks/useAuth.js';

const Notes = () => {
  const { user } = useAuth();

  return (
    <Wrapper>
      <Header>Notes</Header>
      <GridBox>
        <ViewWrapper isLong>
          <NoteForm />
        </ViewWrapper>
        <NotesWrapper>
          {user.notes?.length > 0 &&
            user.notes.map((note) => <Note key={note._id} id={note._id} content={note.content} title={note.title} />)}
        </NotesWrapper>
      </GridBox>
    </Wrapper>
  );
};

export default Notes;

import React, { useState } from 'react';
import Note from 'components/molecules/Note/Note.js';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles.js';
import { useAuth } from 'hooks/useAuth.js';
import { Description } from 'components/molecules/YesCancelModal/YesCancelModal.styles.js';

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>Notes</WidgetHandler>
      <NotesWrapper>
        {user.notes.length ? (
          user.notes.map(({ title, content, _id }) => <Note id={_id} key={_id} title={title} content={content} />)
        ) : (
          <Description>Create your first note</Description>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;

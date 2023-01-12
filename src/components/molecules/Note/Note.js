import React from 'react';
import { Title } from 'components/atoms/Title/Title.js';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles.js';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { useRemoveNote } from 'api/services/notes.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { useError } from 'hooks/useError.js';
import { useAuth } from 'hooks/useAuth.js';

const Note = ({ title, content, id }) => {
  const { mutate } = useRemoveNote();
  const { user } = useAuth();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();

  const onDelete = (data) => {
    mutate(data, {
      onSuccess: () => dispatchAction('Note removed successfully'),
      onError: () => dispatchError('Error while removing note'),
    });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton
        isRed
        title="Remove this note"
        aria-label="Delete"
        onClick={() => onDelete({ id, email: user?.email, isTeacher: user?.isTeacher })}
      >
        <DeleteIcon />
      </StyledDeleteButton>
    </NoteWrapper>
  );
};

export default Note;

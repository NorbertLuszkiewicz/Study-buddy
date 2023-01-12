import React from 'react';
import { useForm } from 'react-hook-form';

import { useCreateNote } from 'api/services/notes.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { FormWrapper, ButtonStyled } from './NoteForm.styles.js';

const NoteForm = () => {
  const { user } = useAuth();
  const { mutate } = useCreateNote();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        dispatchAction('Your note has been added.');
        reset();
      },
      onError: () => dispatchError('Error while create note'),
    });
  };

  register('email', { value: user.email });
  register('isTeacher', { value: user.isTeacher });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create new note</Title>
      <FormField label="title" name="title" id="title" placeholder="Title" {...register('title', { required: true })} />
      {errors.title && <ValidationMessage>Title is required</ValidationMessage>}
      <FormField
        label="content"
        name="content"
        id="content"
        isTextarea
        placeholder="Content"
        {...register('content', { required: true })}
      />
      {errors.content && <ValidationMessage>Content is required</ValidationMessage>}
      <ButtonStyled disabled={errors.description || errors.title} isBig type="submit">
        Create Note
      </ButtonStyled>
    </FormWrapper>
  );
};

export default NoteForm;

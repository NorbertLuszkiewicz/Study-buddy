import React from 'react';
import { useForm } from 'react-hook-form';

import { useCreateMessage } from 'api/services/messages.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { FormWrapper, ButtonStyled } from './MessageForm.styles.js';

const MessageForm = ({ className, studentEmail }) => {
  const { mutate } = useCreateMessage();
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
        dispatchAction('Your message has been sent.');
        reset();
      },
      onError: () => dispatchError('Error while create message'),
    });
  };

  const auth = useAuth();
  register('author', { value: auth.user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Send message to whole class</Title>
      <FormField label="title" name="title" id="title" placeholder="Title" {...register('title', { required: true })} />
      {errors.title && <ValidationMessage>Title is required</ValidationMessage>}
      <FormField
        label="description"
        name="description"
        id="description"
        isTextarea
        placeholder="Description"
        {...register('description', { required: true })}
      />
      {errors.description && <ValidationMessage>Description is required</ValidationMessage>}
      {className && (
        <FormField
          label="class"
          name="className"
          id="className"
          disabled
          {...register('className', { value: className })}
        />
      )}
      {studentEmail && (
        <FormField
          label="student"
          name="student"
          id="student"
          disabled
          {...register('studentEmail', { value: studentEmail })}
        />
      )}
      <ButtonStyled disabled={errors.description || errors.title} isBig type="submit">
        Send message
      </ButtonStyled>
    </FormWrapper>
  );
};

export default MessageForm;

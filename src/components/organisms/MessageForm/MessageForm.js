import { useCreateMessage } from 'api/services/messages.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import { useAuth } from 'hooks/useAuth.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, ButtonStyled, StyledFormField } from './MessageForm.styles.js';

const MessageForm = ({ className }) => {
  const { mutate } = useCreateMessage();
  const { dispatchAction } = useSuccessAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
    dispatchAction('Your message has been sent.');
    reset();
  };

  const auth = useAuth();
  register('author', { value: auth.user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Send message to whole class</Title>
      <StyledFormField
        label="title"
        name="title"
        id="title"
        placeholder="Title"
        {...register('title', { required: true })}
      />
      {errors.title && <ValidationMessage>Title is required</ValidationMessage>}
      <StyledFormField
        label="description"
        name="description"
        id="description"
        isTextarea
        placeholder="Description"
        {...register('description', { required: true })}
      />
      {errors.description && <ValidationMessage>Description is required</ValidationMessage>}
      {className && (
        <StyledFormField
          label="class"
          name="className"
          id="className"
          disabled
          {...register('className', { value: className })}
        />
      )}
      <ButtonStyled disabled={errors.description || errors.title} isBig type="submit">
        Send message
      </ButtonStyled>
    </FormWrapper>
  );
};

export default MessageForm;

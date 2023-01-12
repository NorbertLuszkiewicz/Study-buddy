import React from 'react';
import { Navigate } from 'react-router-dom';
import { FormWrapper, ButtonStyled } from './ArticleForm.styles.js';
import { useCreateArticle } from 'api/services/article.js';
import { useAuth } from 'hooks/useAuth.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import { useForm } from 'react-hook-form';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import FormField from 'components/molecules/FormField/FormField.js';

const ArticleForm = () => {
  const { user } = useAuth();
  const { mutate } = useCreateArticle();
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
        dispatchAction('Your article has been created.');
        reset();
      },
      onError: () => dispatchError('Error while create article'),
    });
  };

  if (!user.isTeacher) return <Navigate to="/" />;
  register('author', { value: user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Add article</Title>
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
      <FormField label="img url" name="img" id="img" placeholder="img url" {...register('img')} />
      <ButtonStyled isBig type="submit">
        Add article
      </ButtonStyled>
    </FormWrapper>
  );
};

export default ArticleForm;

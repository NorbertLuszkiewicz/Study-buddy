import { useAddSubject } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';

import { useSuccessAction } from 'hooks/useSuccessAction.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { FormWrapper, ButtonStyled, StyledFormField } from './SubjectForm.styles.js';

const SubjectForm = ({ className }) => {
  const { mutate, isError, isSuccess } = useAddSubject();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    mutate(data);
    if (isSuccess) {
      dispatchAction('Subject created successfully');
      reset();
    }
    if (isError) dispatchError('Error while creating subject');
  };

  register('teacher', { value: user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create a school subject for a class</Title>
      <StyledFormField
        label="name"
        name="name"
        id="name"
        placeholder="Name"
        {...register('name', { required: true })}
      />
      {errors.name && <ValidationMessage>Title is required</ValidationMessage>}
      {className && (
        <StyledFormField
          label="class"
          name="className"
          id="className"
          disabled
          {...register('className', { value: className })}
        />
      )}
      <ButtonStyled isBig type="submit">
        Create exam
      </ButtonStyled>
    </FormWrapper>
  );
};

export default SubjectForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateSubject } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { FormWrapper, ButtonStyled } from './CreateSubjectForm.styles.js';

const CreateSubjectForm = ({ className }) => {
  const { mutate } = useCreateSubject();
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
    mutate(data, {
      onSuccess: () => {
        dispatchAction('Subject created successfully');
        reset();
      },
      onError: () => dispatchError('Error while creating subject'),
    });
  };

  register('teacher', { value: user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create a school subject for a class</Title>
      <FormField label="name" name="name" id="name" placeholder="Name" {...register('name', { required: true })} />
      {errors.name && <ValidationMessage>Title is required</ValidationMessage>}
      {className && (
        <FormField
          label="class"
          name="className"
          id="className"
          disabled
          {...register('className', { value: className })}
        />
      )}
      <ButtonStyled isBig type="submit">
        Create subject
      </ButtonStyled>
    </FormWrapper>
  );
};

export default CreateSubjectForm;

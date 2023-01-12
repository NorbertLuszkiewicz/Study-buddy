import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateExam } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { getSubjectsOptions } from 'helpers/helpers.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { FormWrapper, ButtonStyled, SelectStyled, StyledLabel, DataPicker } from './ExamForm.styles.js';

const ExamForm = ({ className }) => {
  const { mutate } = useCreateExam();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();
  const options = getSubjectsOptions(user.subjects, className);
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        dispatchAction('Your exam has been added.');
        reset();
      },
      onError: () => dispatchError('Error while adding exam.'),
    });
  };

  register('teacher', { value: user.name });
  if (options.length === 0) return <div>You have no subject for this class.</div>;
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create exam to whole class</Title>
      <FormField label="name" name="name" id="name" placeholder="Name" {...register('name', { required: true })} />
      {errors.name && <ValidationMessage>Title is required</ValidationMessage>}
      <StyledLabel htmlFor="subject">subject</StyledLabel>
      <SelectStyled
        id="subject"
        classNamePrefix="Select"
        defaultValue={selectedSubject}
        options={options}
        onChange={(subject) => {
          setSelectedSubject(subject);
          register('subject', { value: subject.value });
        }}
      />
      {errors.subject && <ValidationMessage>Subject is required</ValidationMessage>}
      <StyledLabel htmlFor="date">date</StyledLabel>
      <DataPicker
        label="date"
        type="date"
        name="date"
        id="date"
        {...register('date', { required: true, validate: (v) => new Date() < new Date(v) })}
      />
      {errors.date && <ValidationMessage>Date in future is required</ValidationMessage>}
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
        Create exam
      </ButtonStyled>
    </FormWrapper>
  );
};

export default ExamForm;

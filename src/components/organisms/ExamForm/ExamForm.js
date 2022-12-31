import { useCreateExam } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';

import { useSuccessAction } from 'hooks/useSuccessAction.js';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormWrapper,
  ButtonStyled,
  StyledFormField,
  SelectStyled,
  StyledLabel,
  DataPicker,
} from './ExamForm.styles.js';

const ExamForm = ({ className }) => {
  const { mutate, isSuccess, isError } = useCreateExam();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { user } = useAuth();
  const options = user.subjects
    ?.filter((x) => x.class === className)
    .map((subject) => {
      return { value: subject.name, label: subject.name };
    });
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const onSubmit = (data) => {
    mutate(data);
    if (isSuccess) {
      dispatchAction('Your exam has been added.');
      reset();
    }
    if (isError) dispatchError('Error while adding exam.');
  };

  register('teacher', { value: user.name });
  register('subject', { value: selectedSubject.value });

  if (options.length === 0) return <div>You have no subject for this class.</div>;
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create exam to whole class</Title>
      <StyledFormField
        label="name"
        name="name"
        id="name"
        placeholder="Name"
        {...register('name', { required: true })}
      />
      {errors.name && <ValidationMessage>Title is required</ValidationMessage>}
      <StyledLabel htmlFor="subject">subject</StyledLabel>
      <SelectStyled
        id="subject"
        classNamePrefix="Select"
        defaultValue={selectedSubject}
        options={options}
        onChange={setSelectedSubject}
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

export default ExamForm;

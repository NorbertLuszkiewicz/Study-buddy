import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateGrade } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { getGradeOptions } from 'helpers/helpers.js';
import { useError } from 'hooks/useError.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import { FormWrapper, ButtonStyled, SelectStyled, StyledLabel } from './GradeForm.styles.js';

const GradeForm = ({ studentEmail, subjectName }) => {
  const { mutate } = useCreateGrade();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const options = getGradeOptions();
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        dispatchAction('Grade has been added.');
        reset();
      },
      onError: () => dispatchError('Error while adding grade.'),
    });
  };

  register('subjectName', { value: subjectName });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Add grade</Title>
      <FormField label="name" name="name" id="name" placeholder="Name" {...register('name', { required: true })} />
      {errors.name && <ValidationMessage>Name is required</ValidationMessage>}
      <StyledLabel htmlFor="subject">value</StyledLabel>
      <SelectStyled
        id="value"
        classNamePrefix="Select"
        defaultValue={selectedSubject}
        options={options}
        onChange={(subject) => {
          setSelectedSubject(subject);
          register('value', { value: subject.value });
        }}
      />
      {errors.subject && <ValidationMessage>Value is required</ValidationMessage>}
      {studentEmail && (
        <FormField
          label="student"
          name="student"
          id="student"
          disabled
          {...register('email', { value: studentEmail })}
        />
      )}
      <ButtonStyled isBig type="submit">
        Add grade
      </ButtonStyled>
    </FormWrapper>
  );
};

export default GradeForm;

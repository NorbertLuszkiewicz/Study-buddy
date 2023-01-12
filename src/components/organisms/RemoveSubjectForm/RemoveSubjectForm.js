import { useRemoveSubject } from 'api/services/subjects.js';
import { Title } from 'components/atoms/Title/Title.js';
import { ValidationMessage } from 'components/atoms/ValidationMessage/ValidationMessage.js';
import FormField from 'components/molecules/FormField/FormField.js';
import { getSubjectsOptions } from 'helpers/helpers.js';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';

import { useSuccessAction } from 'hooks/useSuccessAction.js';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, ButtonStyled, StyledLabel, SelectStyled } from './RemoveSubjectForm.styles.js';

const RemoveSubjectForm = ({ className }) => {
  const { mutate } = useRemoveSubject();
  const { dispatchAction } = useSuccessAction();
  const { dispatchError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const options = getSubjectsOptions(user.subjects, className);
  const [selectedSubject, setSelectedSubject] = useState(options[0]);

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        dispatchAction('Subject removed successfully');
        setSelectedSubject(options[0]);
      },
      onError: () => dispatchError('Error while Removing subject'),
    });
  };

  register('teacher', { value: user.name });
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Remove a school subject for a class</Title>
      <StyledLabel htmlFor="subject">subject</StyledLabel>
      <SelectStyled
        id="subject"
        classNamePrefix="Select"
        value={selectedSubject}
        options={options}
        onChange={(subject) => {
          setSelectedSubject(subject);
          register('subject', { value: subject.value });
        }}
      />
      {errors.subject && <ValidationMessage>Subject is required</ValidationMessage>}
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
        Remove subject
      </ButtonStyled>
    </FormWrapper>
  );
};

export default RemoveSubjectForm;

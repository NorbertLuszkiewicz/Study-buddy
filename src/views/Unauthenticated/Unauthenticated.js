import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth.js';
import FormField from 'components/molecules/FormField/FormField.js';
import React from 'react';
import { FormWrapper, Wrapper, ButtonStyled } from 'views/Unauthenticated/Unauthenticated.styles.js';
import { Title } from 'components/atoms/Title/Title.js';
import { Logo } from 'components/atoms/Logo/Logo.js';
import Spinner from 'components/molecules/Spinner/Spinner.js';

const Unauthenticated = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (auth.user === 'Loading') return <Spinner center={true} />;

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(auth.signIn)}>
        <Title>Sign in</Title>
        <FormField
          label="email"
          name="email"
          id="email"
          {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
        />
        {errors.email && <span>Valid email is required</span>}
        <FormField
          label="password"
          name="password"
          id="password"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>Password is required</span>}
        <ButtonStyled isBig type="submit">
          Sign in
        </ButtonStyled>
        <Logo isAuthForm />
      </FormWrapper>
    </Wrapper>
  );
};

export default Unauthenticated;

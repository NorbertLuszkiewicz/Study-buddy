import React from 'react';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth.js';
import { useError } from 'hooks/useError.js';
import Unauthenticated from '../Unauthenticated/Unauthenticated.js';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage.js';
import Authenticated from 'views/Authenticated/Authenticated.js';
import { useSuccessAction } from 'hooks/useSuccessAction.js';
import SuccessMessage from 'components/molecules/SuccessMessage/SuccessMessage.js';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Root = () => {
  const auth = useAuth();
  const { error } = useError();
  const { action } = useSuccessAction();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {action ? <SuccessMessage message={action} /> : null}
      {auth.user && auth.user !== 'Loading' ? <Authenticated /> : <Unauthenticated />}
    </>
  );
};

export default Root;

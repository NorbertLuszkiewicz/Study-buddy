import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button.js';
import FormField from 'components/molecules/FormField/FormField.js';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledFormField = styled(FormField)`
  width: 350px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 30px;
`;

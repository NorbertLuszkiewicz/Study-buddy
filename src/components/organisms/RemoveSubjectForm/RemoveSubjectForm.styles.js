import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button.js';
import Select from 'react-select';
import { Label } from 'components/atoms/Label/Label.js';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 30px;
`;

export const StyledLabel = styled(Label)`
  margin: 10px 0;
  width: 100%;
  max-width: 350px;
`;

export const SelectStyled = styled(Select)`
  .Select__control {
    border-radius: 50px;
    height: 42px;
    border: 1px solid ${({ theme }) => theme.colors.darkPurple};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  }

  max-width: 350px;
  width: 100%;

  border-radius: 50px;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

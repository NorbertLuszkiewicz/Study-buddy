import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button.js';

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 80px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 25px -2px rgba(208, 209, 222, 1);
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ButtonStyled = styled(Button)`
  margin-top: 30px;
`;

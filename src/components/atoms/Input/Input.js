import styled from 'styled-components';
import { darken } from 'assets/styles/GlobalStyle.js';

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: ${({ isTextarea }) => (isTextarea ? '15px' : '25px')};
  font-size: ${({ theme }) => theme.fontSize.xl};
  min-height: ${({ isTextarea }) => (isTextarea ? '100px' : 'auto')};
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-family: 'Montserrat', sans-serif;
  }
  &:disabled {
    ${darken(0.2)}
  }

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

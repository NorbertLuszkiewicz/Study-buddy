import { darken } from 'assets/styles/GlobalStyle.js';
import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: filter 0.3s ease-in-out;

  &:hover {
    ${darken(0.04)}
  }
`;

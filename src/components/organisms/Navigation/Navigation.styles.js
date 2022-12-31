import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'assets/styles/GlobalStyle.js';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  transition: filter 0.3s ease-in-out;

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &:hover {
    ${darken(0.2)}
  }
`;

export const StyledLoguout = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.error};
  text-align: right;
  margin: 65px 20px 15px auto;
  position: relative;
  transition: filter 0.3s ease-in-out;

  &:hover {
    ${darken(0.1)}
  }
`;

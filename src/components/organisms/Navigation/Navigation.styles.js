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

  @media (min-width: 768px) {
    grid-row: 1 / 3;
    grid-column: 1 / 1;
  }
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px 20px;
  position: relative;
  transition: filter 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.xxl};

  @media (min-width: 768px) {
    margin: 15px 20px 15px auto;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 22px;
    height: 5px;
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    background-color: ${({ theme }) => theme.colors.darkPurple};

    @media (min-width: 768px) {
      width: 18px;
      height: 3px;
      right: -20px;
    }
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

export const StyledLogout = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.error};
  text-align: right;
  margin: 65px 20px 15px 20px;
  position: relative;
  transition: filter 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.xxl};

  @media (min-width: 768px) {
    margin: 65px 20px 15px auto;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  &:hover {
    ${darken(0.1)}
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledMenu = styled.nav`
  z-index: 9000;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
  height: 100vh;
  padding: 5%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

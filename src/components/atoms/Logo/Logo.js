import React from 'react';
import styled, { css } from 'styled-components';

const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }

  ${({ isAuthForm }) =>
    isAuthForm &&
    css`
      position: absolute;
      width: 100px;
      height: 60px;
      right: -85px;
      top: 20px;
      box-shadow: 3px 3px 12px 0px rgba(190, 190, 190, 1);
      display: none;

      @media (min-width: 768px) {
        display: block;
      }

      h1 {
        font-size: 15px;
      }
    `}
`;

export const Logo = ({ isAuthForm }) => {
  return (
    <LogoWrapper isAuthForm={isAuthForm}>
      <h1>
        Study
        <br />
        Buddy
      </h1>
    </LogoWrapper>
  );
};

import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title.js';

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(200%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  background-color: white;
  padding: 25px 25px 15px;
  color: ${({ theme }) => theme.colors.success};
  border: 3px solid ${({ theme }) => theme.colors.success};
  border-radius: 15px;
  animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 4s ease-in-out 1 reverse forwards;
  z-index: 9;

  ${Title} {
    color: ${({ theme }) => theme.colors.success};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.success};
    width: 60px;
    height: 5px;
    border-radius: 50px;
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 3s 1s linear 1 forwards;
  }
`;

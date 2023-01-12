import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper.js';

export const Wrapper = styled(ViewWrapper)`
  margin-bottom: 20px;
  padding: 15px 40px;
  width: 100%;
  max-width: unset;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme, isStudent }) =>
    `inset -4px -10px 7px -2px ${isStudent ? theme.colors.success : theme.colors.warning}`};

  p {
    line-height: 1.6;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 20px;
`;

export const Author = styled.p`
  margin: -20px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Description = styled.p`
  overflow: hidden;
  white-space: pre-line;
  width: 100%;
`;

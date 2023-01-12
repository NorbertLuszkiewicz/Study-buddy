import styled from 'styled-components';

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkGrey};
  display: inline;
`;

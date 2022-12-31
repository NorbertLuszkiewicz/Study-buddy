import styled from 'styled-components';

export const ValidationMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.dark};
  margin: 4px;
`;

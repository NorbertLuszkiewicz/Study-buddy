import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: white;
    transition: color 0.2s ease-in-out;
  }

  &:hover svg {
    color: ${({ theme, isRed }) => (isRed ? theme.colors.error : theme.colors.success)};
  }
`;

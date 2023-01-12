import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button.js';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 50px 20px 50px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
`;

export const FlexBox = styled.div`
  margin-top: -15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

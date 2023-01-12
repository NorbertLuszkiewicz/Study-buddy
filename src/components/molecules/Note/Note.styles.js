import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton.js';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 40px;
  white-space: pre-wrap;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledDeleteButton = styled(IconButton)`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey};
  top: 18px;
  left: -40px;
`;

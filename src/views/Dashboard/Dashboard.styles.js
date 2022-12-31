import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
  margin: 30px 0 0 50px;
`;

export const SelectStyled = styled(Select)`
  .Select__control {
    border-radius: 50px;
  }

  width: 200px;
  margin-left: 30px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

export const FlexBox = styled.div`
  position: relative;
  display: flex;
  align-items: ${({ align }) => align || 'center'};
`;

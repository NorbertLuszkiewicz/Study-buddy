import styled from 'styled-components';
import Select from 'react-select';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';

export const Wrapper = styled.div`
  margin: 30px 5% 0 5%;

  @media (min-width: 768px) {
    margin: 30px 40px 0 40px;
  }
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
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledViewWrapper = styled(ViewWrapper)`
  border-radius: 25px 25px 0 0;

  @media (min-width: 768px) {
    border-radius: 25px;
  }
`;

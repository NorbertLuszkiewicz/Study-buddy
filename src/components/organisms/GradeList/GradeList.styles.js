import Select from 'react-select';
import styled from 'styled-components';
import { Average } from 'components/atoms/Average/Average.js';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const GradeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #dfe2e8;
  padding: 5px 0;
  gap: 0 30px;
`;

export const StyledAverage = styled(Average)`
  position: absolute;
  width: 45px;
  height: 45px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  top: -25px;
  right: -32px;
`;

export const SelectStyled = styled(Select)`
  width: 100%;
  outline: none !important;
  
  .Select__control {
    border: none;
    border-bottom 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 0;
    margin: -20px 30px 10px 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    outline: none !important;
  }
  .Select__menu {
    margin: -10px 0 0 0; 
    width: calc(100% - 30px);
  }

  :focus {
    -webkit-appearance: none;
  }
  :hover {
    -webkit-appearance: none;
  }
`;

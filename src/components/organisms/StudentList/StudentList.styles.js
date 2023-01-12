import Select from 'react-select';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Student = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfe2e8;
  padding: 5px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const SelectStyled = styled(Select)`
  width: 100%;
  outline: none !important;
  .Select__control {
    border: none;
    border-bottom 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 0;
    margin: -20px 0 10px 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    outline: none !important;
  }
  .Select__menu {
    margin: -10px 0 0 0; 
  }

  :focus {
    -webkit-appearance: none;
  }
  :hover {
    -webkit-appearance: none;
  }
`;

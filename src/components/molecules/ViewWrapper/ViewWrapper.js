import styled from 'styled-components';

export const ViewWrapper = styled.div`
  margin: 25px 0 0 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  min-height: ${({ isLong }) => (isLong ? '400px' : 'auto')};
  padding: 30px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    min-height: ${({ isLong }) => (isLong ? '500px' : 'auto')};
    padding: 40px 50px;
  }
`;

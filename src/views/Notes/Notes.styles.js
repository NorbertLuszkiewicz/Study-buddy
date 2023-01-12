import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 5% 0 5%;
  max-height: calc(100vh - 210px);

  @media (min-width: 768px) {
    margin: 30px 40px 0 40px;
    max-height: calc(100vh - 210px);
  }
`;

export const NotesWrapper = styled.div`
  margin-right: 10px;

  @media (min-width: 768px) {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
  }
`;

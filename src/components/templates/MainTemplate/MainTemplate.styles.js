import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 75px 1fr;
  grid-template-columns: 0 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    grid-template-rows: 90px 1fr;
    grid-template-columns: 150px 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: ${({ isFullScreen }) => (isFullScreen ? '150px 1fr' : '150px 1fr 0.66fr')};
  }
`;

export const ChildrenWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  overflow-y: auto;

  @media (min-width: 768px) {
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;

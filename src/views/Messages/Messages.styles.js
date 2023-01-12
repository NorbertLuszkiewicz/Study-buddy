import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';

export const Wrapper = styled.div`
  margin: 30px 5% 0 5%;

  @media (min-width: 768px) {
    margin: 30px 40px 0 40px;
  }
`;
export const ViewWrapperStyled = styled(ViewWrapper)`
  max-height: calc(100vh - 210px);
  max-width: 800px;
  overflow-y: auto;
`;

import { HalfMalf } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: auto;
`;

export const Spinner = ({ center = false }) => {
  return (
    <Wrapper>
      <HalfMalf text={'Loading...'} center={center} width={'150px'} height={'150px'} />
    </Wrapper>
  );
};

export default Spinner;

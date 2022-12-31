import ErrorMessage from './ErrorMessage.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
`;

const Template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};

const Component = { title: 'Components/Molecules/ErrorMessage', component: ErrorMessage };

export default Component;

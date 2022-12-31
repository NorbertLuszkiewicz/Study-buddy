import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 30px;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.div`
  position: fixed;
  cursor: pointer;
  padding: 6px;
  top: 12px;
  right: 12px;
`;

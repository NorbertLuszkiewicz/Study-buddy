import { Wrapper, Overlay, CloseButton } from './Modal.styles.js';

export const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </Wrapper>
    </Overlay>
  );
};

export default Modal;

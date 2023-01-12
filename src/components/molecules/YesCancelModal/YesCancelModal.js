import { Title } from 'components/atoms/Title/Title.js';
import { Wrapper, Overlay, CloseButton, ButtonStyled, Description, ButtonWrapper } from './YesCancelModal.styles.js';

export const YesCancelModal = ({ open, onClose, title, description, successFn }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonWrapper>
          <ButtonStyled isBig onClick={onClose}>
            Cancel
          </ButtonStyled>
          <ButtonStyled isBig isSuccess onClick={() => successFn()}>
            Yes
          </ButtonStyled>
        </ButtonWrapper>
      </Wrapper>
    </Overlay>
  );
};

export default YesCancelModal;

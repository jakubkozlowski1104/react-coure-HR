import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleCloseModal, children }) => {
  return (
    <ModalWrapper ariaHideApp={false} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <button onClick={() => handleCloseModal(handleCloseModal)}>close X</button>
    </ModalWrapper>
  );
};

export default Modal;

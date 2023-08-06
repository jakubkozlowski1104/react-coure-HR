import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleCloseModal, children }) => {
  return ReactDOM.createPortal(
    <ModalWrapper isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <button onClick={() => handleCloseModal(handleCloseModal)}>close X</button>
    </ModalWrapper>
  );
};

export default Modal;

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <button onClick={() => handleCloseModal(handleCloseModal)}>close X</button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;

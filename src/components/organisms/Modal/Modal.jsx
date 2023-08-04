import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      Hello modal <button onClick={handleClose}>close X</button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;

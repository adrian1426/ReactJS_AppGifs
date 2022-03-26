import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
  const { children, onClose } = props;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button
          className='btn'
          onClick={onClose}
        >
          Cerrar
        </button>

        {children}
      </div>
    </div>
  );
};

const ModalPortal = (props) => {
  const { children, onClose } = props;

  return (
    ReactDOM.createPortal(
      <Modal onClose={onClose}>
        {children}
      </Modal>,
      document.getElementById('portal-modal')
    )
  );
};

export default ModalPortal;
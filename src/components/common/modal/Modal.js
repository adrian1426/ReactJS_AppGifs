import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const { children, onClose } = props;

  return (
    <div className='modal'>
      <div className='modal-contenido'>
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

export default Modal;
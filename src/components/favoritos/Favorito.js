import React, { useState } from 'react';
import { useUser } from '../../hooks/userHook/useUser';
import Modal from 'components/common/modal/Modal';
import Login from 'components/login/Login';
import './Favorito.css';

const Favorito = (props) => {
  const { id } = props;
  const [showModal, setShowModal] = useState(false);
  const { isLogged, addFavorito, favs, delFavorito } = useUser();

  const isFavorito = favs.some(f => f === id);
  const [texto, emoji] = isFavorito ? ['Quitar de favoritos', '❌'] : ['Agregar a favorito', '💖'];

  const handleClick = () => {
    if (!isLogged) {
      return setShowModal(true);
    }

    isFavorito ? delFavorito({ id }) : addFavorito({ id });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className='gf-fav'
        onClick={handleClick}
      >
        <span
          role='img'
          aria-label={texto}
        >
          {emoji}
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleCloseModal} >
          <Login />
        </Modal>
      )}
    </>
  );
};

export default Favorito;
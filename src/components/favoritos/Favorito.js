import React from 'react';
import { useLocation } from 'wouter';
import { login } from 'constants/appRouterConstants';
import { useUser } from '../../hooks/userHook/useUser';
import './Favorito.css';

const Favorito = (props) => {
  const { id } = props;
  const { isLogged, addFavorito, favs, delFavorito } = useUser();
  const navigate = useLocation()[1];

  const isFavorito = favs.some(f => f === id);
  const [texto, emoji] = isFavorito ? ['Quitar de favoritos', '❌'] : ['Agregar a favorito', '💖'];

  const handleClick = () => {
    if (!isLogged) {
      return navigate(login);
    }

    isFavorito ? delFavorito({ id }) : addFavorito({ id });
  };

  return (
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
  );
};

export default Favorito;
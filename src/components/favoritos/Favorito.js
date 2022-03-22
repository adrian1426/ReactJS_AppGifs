import React from 'react';
import { useLocation } from 'wouter';
import { login } from 'constants/appRouterConstants';
import { useUser } from '../../hooks/userHook/useUser';

const Favorito = (props) => {
  const { id } = props;
  const { isLogged } = useUser();
  const navigate = useLocation()[1];

  const handleClick = () => {
    if (!isLogged) {
      return navigate(login);
    }

    alert(id)
  };

  return (
    <button onClick={handleClick}>
      <span
        role='img'
        aria-label='Favoritos Gif'
      >
        💖
      </span>
    </button>
  );
};

export default Favorito;
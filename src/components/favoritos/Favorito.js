import React from 'react';

const Favorito = (props) => {
  const { id } = props;

  const handleClick = () => {
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
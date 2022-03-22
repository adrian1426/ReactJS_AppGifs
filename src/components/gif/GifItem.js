import React from 'react';
import { Link } from 'wouter';
import { gifDetailBR } from '../../constants/appRouterConstants';
import Favorito from '../favoritos/Favorito';
import './GifItem.css';

const GifItem = (props) => {
  const { gif } = props;

  return (
    <div className='Gif'>

      <div className='Gif-buttons'>
        <Favorito id={gif.id} />
      </div>

      <Link
        to={`${gifDetailBR}/${gif.id}`}
        className="Gif-link"
      >
        <h4>{gif.title}</h4>
        <img
          loading='lazy'
          src={gif.url}
          alt={gif.title}
        />
      </Link>
    </div>
  );
};

export default React.memo(GifItem);
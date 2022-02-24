import React from 'react';
import { Link } from 'wouter';
import { gifSearchBR } from '../../constants/appRouterConstants';

const GifCategory = (props) => {
  const { name, options } = props;

  return (
    <div>
      <h3>{name}</h3>

      {
        options.map(popular => (
          <label
            key={popular}
          >
            <Link to={`${gifSearchBR}/${popular}`}>
              Gifs de {popular}
            </Link>
          </label>
        ))
      }
    </div>
  );
};

export default GifCategory;
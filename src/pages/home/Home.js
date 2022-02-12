import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { gifSearchBR } from '../../constants/appRouterConstants';

const POPULAR_GIFS = ['Matrix', 'Mexico', 'Colombia', 'Naruto'];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`${gifSearchBR}/${keyword}`);
  };

  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <h3 className='App-title'>Los gifs más populares</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='buscar gif aquí'
          type="text"
          onChange={handleChange}
          value={keyword}
        />
      </form>

      <ul>
        {
          POPULAR_GIFS.map(popular => (
            <li key={popular}>
              <Link to={`${gifSearchBR}/${popular}`}>
                Gifs de {popular}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Home;
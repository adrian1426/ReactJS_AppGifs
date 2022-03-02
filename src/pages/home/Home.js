import { useState } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '../../hooks/useGifs';
import { gifSearchBR } from '../../constants/appRouterConstants';
import Spinner from 'components/spinner/Spinner';
import GifList from 'components/gif/GifList';
import SearchTrendingLazy from 'components/trending/SearchTrendingLazy';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const { loading, gifs } = useGifs();
  const pushLocation = useLocation()[1];

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`${gifSearchBR}/${keyword}`);
  };

  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  if (loading) {
    return <Spinner />;
  }

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

      <h3>úlitmos Gifs</h3>
      <GifList gifs={gifs} />
      <SearchTrendingLazy />
    </>
  );
};

export default Home;
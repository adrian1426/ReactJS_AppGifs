import { useLocation } from 'wouter';
import { useGifs } from '../../hooks/useGifs';
import { gifSearchBR } from '../../constants/appRouterConstants';
import Spinner from 'components/spinner/Spinner';
import GifList from 'components/gif/GifList';
import SearchTrendingLazy from 'components/trending/SearchTrendingLazy';
import SearchForm from 'components/searchForm/SearchForm';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { loading, gifs } = useGifs();
  const pushLocation = useLocation()[1];

  const handleSubmit = (keyword) => {
    pushLocation(`${gifSearchBR}/${keyword}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Giffy | Home</title>
      </Helmet>
      <h3 className='App-title'>Los gifs más populares</h3>

      <SearchForm handleSubmit={handleSubmit} />

      <h3>úlitmos Gifs</h3>
      <GifList gifs={gifs} />
      <SearchTrendingLazy />
    </>
  );
};

export default Home;
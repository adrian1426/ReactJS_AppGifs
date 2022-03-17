import { useGifs } from '../../hooks/useGifs';
import Spinner from 'components/spinner/Spinner';
import GifList from 'components/gif/GifList';
import SearchTrendingLazy from 'components/trending/SearchTrendingLazy';
import SearchForm from 'components/searchForm/SearchForm';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { loading, gifs } = useGifs();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>Giffy | Home</title>
        <link rel='canonical' href='https://gifs-lovat.vercel.app/' />
      </Helmet>
      <h3 className='App-title'>Los gifs más populares</h3>

      <SearchForm />

      <h3>úlitmos Gifs</h3>
      <GifList gifs={gifs} />
      <SearchTrendingLazy />
    </>
  );
};

export default Home;
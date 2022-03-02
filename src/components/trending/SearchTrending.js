import { useEffect, useState, useRef } from 'react';
import { getTrendingGif } from 'services/gifService';
import GifCategory from '../gif/GifCategory';
import { useNearScreen } from '../../hooks/useNearScreen';

const SearchTrending = () => {
  const [trends, setTrends] = useState([]);

  const _getTrendingGif = async () => {
    const response = await getTrendingGif();
    setTrends(response);
  };

  useEffect(() => {
    _getTrendingGif();
  }, []);

  return (
    <GifCategory
      name='Tendencias'
      options={trends}
    />
  );
};

const SearchTrendingLazy = () => {
  const [isNearScreen, elementoDiv] = useNearScreen('115px');

  return (
    <div ref={elementoDiv}>
      {isNearScreen && <SearchTrending />}
    </div>
  );
};

export default SearchTrendingLazy;
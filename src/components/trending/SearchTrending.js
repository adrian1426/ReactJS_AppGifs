import { useState, useEffect } from 'react';
import { getTrendingGif } from '../../services/gifService';
import GifCategory from '../gif/GifCategory';

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

export default SearchTrending;
import { useEffect, useState } from 'react';
import { getTrendingGif } from 'services/gifService';
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

const SearchTrendingLazy = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onLoadObserver = (entries) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onLoadObserver, {
      rootMargin: '100px'
    });

    observer.observe(document.getElementById('lazy-trending'));
  });

  return (
    <div id='lazy-trending'>
      {show && <SearchTrending />}
    </div>
  );
};

export default SearchTrendingLazy;
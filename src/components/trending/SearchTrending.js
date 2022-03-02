import { useEffect, useState, useRef } from 'react';
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
  const elementoDiv = useRef();

  useEffect(() => {
    const onLoadObserver = (entries, observer) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onLoadObserver, {
      rootMargin: '100px'
    });

    observer.observe(elementoDiv.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={elementoDiv}>
      {show && <SearchTrending />}
    </div>
  );
};

export default SearchTrendingLazy;
import { useContext, useState, useEffect, useCallback } from 'react';
import GifContext from '../context/GifContext';
import { getGifs } from '../services/gifService';

export const useGifs = (keyword) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);

  const _getGifs = useCallback(async () => {
    setLoading(true);

    const newKeyword = keyword || localStorage.getItem('lastKey') || 'random';

    const gifs = await getGifs(newKeyword);
    setGifs(gifs);

    if (keyword) {
      localStorage.setItem('lastKey', keyword);
    }

    setLoading(false);
  }, [keyword, setGifs]);

  useEffect(() => {
    _getGifs();
  }, [_getGifs]);

  return { loading, gifs };
};
import { useState, useEffect, useCallback } from 'react';
import { getGifs } from '../services/gifService';

export const useGifs = (keyword) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const _getGifs = useCallback(async () => {
    setLoading(true);
    const gifs = await getGifs(keyword);
    setGifs(gifs);
    setLoading(false);
  }, [keyword]);

  useEffect(() => {
    _getGifs();
  }, [_getGifs]);

  return { loading, gifs };
};
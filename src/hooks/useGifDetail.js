import { useState, useEffect, useCallback } from 'react';
import { getDetailGif } from 'services/gifService';
import { useGifs } from './useGifs';

export const useGifDetail = (id) => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { gifs } = useGifs();
  const gitFromCache = gifs.find(singleGif => singleGif.id === id);

  const [gif, setGif] = useState(gitFromCache);

  const _getDetailGif = useCallback(async () => {
    setLoading(true);
    const response = await getDetailGif(id);

    if (response.id) {
      setGif(response);
    } else {
      setIsError(true)
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (!gif) {
      _getDetailGif();
    }
  }, [gif, _getDetailGif]);

  return { gif, loading, isError };
};
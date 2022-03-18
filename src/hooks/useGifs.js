import { useContext, useState, useEffect, useCallback } from 'react';
import GifContext from '../context/GifContext';
import { getGifs } from '../services/gifService';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword, rating } = {}) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const _getGifs = useCallback(async () => {
    page === INITIAL_PAGE ? setLoading(true) : setLoadingPage(true);

    const newKeyword = keyword || localStorage.getItem('lastKey') || 'random';

    const gifs = await getGifs({ keyword: newKeyword, page, rating });
    setGifs(gifsPrev => {
      if (page > INITIAL_PAGE) {
        return gifsPrev.concat(gifs)
      }

      return gifs;
    });

    if (keyword) {
      localStorage.setItem('lastKey', keyword);
    }

    page === INITIAL_PAGE ? setLoading(false) : setLoadingPage(false);
  }, [keyword, setGifs, page, rating]);

  useEffect(() => {
    _getGifs();
  }, [_getGifs]);

  return { loading, gifs, setPage, loadingPage };
};
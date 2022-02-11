import { useState, useEffect, useCallback } from 'react';
import { getGifs } from '../../services/gifService';
import GifList from '../../components/gif/GifList';
import Spinner from '../../components/spinner/Spinner';

const GifSearch = (props) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = props.params;

  const _getGifs = useCallback(async () => {
    setLoading(true);
    const gifs = await getGifs(keyword);
    setGifs(gifs);
    setLoading(false);
  }, [keyword]);

  useEffect(() => {
    _getGifs();
  }, [_getGifs]);

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifSearch;
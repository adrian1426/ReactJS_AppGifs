import { useState, useEffect, useCallback } from 'react';
import GifImage from "./GifImage";
import { getGifs } from '../services/gifService';

const GifList = (props) => {
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
    return <h1>Cargando...</h1>
  }

  return (
    <>
      <h1>{keyword}</h1>
      {
        gifs.map(gif => (
          <GifImage
            key={gif.id}
            gif={gif}
          />
        ))
      }
    </>
  );
};

export default GifList;
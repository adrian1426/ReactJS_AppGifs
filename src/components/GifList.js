import { useState, useEffect, useCallback } from 'react';
import GifImage from "./GifImage";
import { getGifs } from '../services/gifService';

const GifList = (props) => {
  const [gifs, setGifs] = useState([]);
  const { keyWord } = props;

  const _getGifs = useCallback(async () => {
    const gifs = await getGifs(keyWord);
    setGifs(gifs);
  }, [keyWord]);

  useEffect(() => {
    _getGifs();
  }, [_getGifs]);

  return (
    <>
      <h1>Gifs</h1>
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
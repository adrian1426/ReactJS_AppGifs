import { useContext } from 'react';
import GifContext from '../context/GifContext';

export const useGifsGlobal = () => {
  const { gifs } = useContext(GifContext);

  return gifs;
};
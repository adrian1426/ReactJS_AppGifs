import { useState, useEffect, useCallback } from 'react';
import { getGifs } from '../../services/gifService';
import GifList from '../../components/gif/GifList';
import Spinner from '../../components/spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';

const GifSearch = (props) => {
  const { keyword } = props.params;
  const { loading, gifs } = useGifs(keyword);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <GifList gifs={gifs} />
    </>
  );
};

export default GifSearch;
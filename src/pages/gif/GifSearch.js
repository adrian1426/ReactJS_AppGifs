import { useState, useEffect, useCallback } from 'react';
import { getGifs } from '../../services/gifService';
import GifList from '../../components/gif/GifList';
import Spinner from '../../components/spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';

const GifSearch = (props) => {
  const { keyword } = props.params;
  const { loading, gifs, setPage, loadingPage } = useGifs(keyword);

  const handleNextPage = () => {
    setPage(p => p + 1);
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <GifList gifs={gifs} />
      {loadingPage && <Spinner />}
      <br />
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
};

export default GifSearch;
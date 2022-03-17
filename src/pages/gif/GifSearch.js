import { useRef, useEffect, useCallback } from 'react';
import { useNearScreen } from 'hooks/useNearScreen';
import GifList from '../../components/gif/GifList';
import Spinner from '../../components/spinner/Spinner';
import { useGifs } from '../../hooks/useGifs';
import debounce from 'just-debounce-it';
import { useSEO } from 'hooks/useSEO';

const GifSearch = (props) => {
  const { keyword } = props.params;
  const { loading, gifs, setPage, loadingPage } = useGifs(keyword);
  const externalRef = useRef();
  const [isNearScreen] = useNearScreen({ externalRef, once: false });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';
  useSEO(title);

  const handleNextPage = () => {
    setPage(p => p + 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextPageDebounce = useCallback(
    debounce(() => handleNextPage(), 200)
    , []);

  useEffect(() => {
    if (isNearScreen) {
      handleNextPageDebounce();
    }
  }, [handleNextPageDebounce, isNearScreen]);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <label htmlFor="">{keyword}</label>
      <br />
      <GifList gifs={gifs} />
      <div id='visor' ref={externalRef}></div>
      {loadingPage && <Spinner />}
    </>
  );
};

export default GifSearch;
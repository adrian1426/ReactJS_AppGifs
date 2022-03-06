import Spinner from 'components/spinner/Spinner';
import { lazy, Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

const SearchTrending = lazy(() => import('./SearchTrending'));

const SearchTrendingLazy = () => {
  const [isNearScreen, elementoDiv] = useNearScreen({ distance: '115px' });

  return (
    <div ref={elementoDiv}>
      {isNearScreen && (
        <Suspense fallback={<Spinner />}>
          <SearchTrending />
        </Suspense>
      )}
    </div>
  );
};

export default SearchTrendingLazy;
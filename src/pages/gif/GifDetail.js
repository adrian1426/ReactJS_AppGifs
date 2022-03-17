import Spinner from 'components/spinner/Spinner';
import { useGifDetail } from 'hooks/useGifDetail';
import { useTitle } from 'hooks/useTitle';
import { Redirect } from 'wouter';
import GifItem from '../../components/gif/GifItem';

const GifDetail = (props) => {
  const { params } = props;
  const { gif, loading, isError } = useGifDetail(params.id);

  const title = gif ? gif.title : '';
  useTitle(title);

  if (loading) {
    return <Spinner />;
  }

  if (isError) {
    return <Redirect to='/404' />
  }

  if (!gif) {
    return null;
  }

  return (
    <div>
      Detalle: {gif.title}
      <GifItem gif={gif} />
    </div>
  );
};

export default GifDetail;
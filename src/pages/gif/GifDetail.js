import Spinner from 'components/spinner/Spinner';
import { useGifDetail } from 'hooks/useGifDetail';
import { Redirect } from 'wouter';
import GifItem from '../../components/gif/GifItem';
import { Helmet } from 'react-helmet';

const GifDetail = (props) => {
  const { params } = props;
  const { gif, loading, isError } = useGifDetail(params.id);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }

  if (isError) {
    return <Redirect to='/404' />
  }

  if (!gif) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>Giffy | {gif.title}</title>
      </Helmet>
      Detalle: {gif.title}
      <GifItem gif={gif} />
    </div>
  );
};

export default GifDetail;
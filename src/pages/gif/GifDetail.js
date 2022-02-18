import GifItem from '../../components/gif/GifItem';
import { useGifsGlobal } from '../../hooks/useGifsGlobal';

const GifDetail = (props) => {
  const gifs = useGifsGlobal();
  const { params } = props;

  const gif = gifs.find(g => g.id === params.id);
  console.log(gif);

  return (
    <div>
      Detalle: {gif.title}
      <GifItem gif={gif} />
    </div>
  );
};

export default GifDetail;
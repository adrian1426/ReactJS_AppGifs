import { useContext } from 'react';
import GifContext from '../../context/GifContext';

const GifDetail = (props) => {
  const { gifs } = useContext(GifContext);
  const { params } = props;

  return (
    <div>
      Detalles {params.id}
    </div>
  );
};

export default GifDetail;
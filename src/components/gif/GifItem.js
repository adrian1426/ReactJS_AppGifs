import { Link } from 'wouter';
import './GifItem.css';

const GifItem = (props) => {
  const { gif } = props;

  return (
    <div className='Gif'>
      <Link
        to={`/gif/${gif.id}`}
        className="Gif-link"
      >
        <h4>{gif.title}</h4>
        <img
          src={gif.url}
          alt={gif.title}
        />
      </Link>
    </div>
  );
};

export default GifItem;
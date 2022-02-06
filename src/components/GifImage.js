import './GifImage.css';

const GifImage = (props) => {
  const { gif } = props;

  return (
    <a
      href={`#${gif.id}`}
      className="Gif"
    >
      <h4>{gif.title}</h4>
      <img
        src={gif.url}
        alt={gif.title}
      />
    </a>
  );
};

export default GifImage;
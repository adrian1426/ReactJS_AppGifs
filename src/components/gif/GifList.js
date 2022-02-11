import GifItem from "./GifItem";
import './GifList.css';

const GifList = (props) => {
  const { gifs } = props;

  return (
    <div className='ListOfGifs'>
      {
        gifs.map(gif => (
          <GifItem
            key={gif.id}
            gif={gif}
          />
        ))
      }
    </div>
  );
};

export default GifList;
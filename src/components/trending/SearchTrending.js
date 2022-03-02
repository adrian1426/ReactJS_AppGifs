import GifCategory from '../gif/GifCategory';

const SearchTrending = (props) => {
  const { trends } = props;

  return (
    <GifCategory
      name='Tendencias'
      options={trends}
    />
  );
};

export default SearchTrending;
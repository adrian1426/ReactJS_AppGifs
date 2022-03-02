import GifCategory from "components/gif/GifCategory";
import { useEffect, useState } from "react";
import { getTrendingGif } from "services/gifService";

const SearchTrending = () => {
  const [trends, setTrends] = useState([]);

  const _getTrendingGif = async () => {
    const response = await getTrendingGif();
    setTrends(response);
  };

  useEffect(() => {
    _getTrendingGif();
  }, []);

  return (
    <GifCategory
      name='Tendencias'
      options={trends}
    />
  );
};

export default SearchTrending;
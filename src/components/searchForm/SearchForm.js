import { gifSearchBR } from 'constants/appRouterConstants';
import { useState } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword, initialRating }) => {
  const valueKeyword = initialKeyword ? decodeURI(initialKeyword) : '';
  const valueRating = initialRating ? initialRating : RATINGS[0];

  const [keyword, setKeyword] = useState(valueKeyword);
  const [rating, setRating] = useState(valueRating);
  const pushLocation = useLocation()[1];

  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`${gifSearchBR}/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
    if (keyword) {
      pushLocation(`${gifSearchBR}/${keyword}/${evt.target.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='buscar gif aquí'
        type="text"
        onChange={handleChange}
        value={keyword}
      />

      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {
          RATINGS.map(rat => (
            <option
              key={rat}
            >
              {rat}
            </option>
          ))
        }
      </select>
    </form>
  );
};

export default SearchForm;
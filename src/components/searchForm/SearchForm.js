import { gifSearchBR } from 'constants/appRouterConstants';
import { useLocation } from 'wouter';
import { useSearchForm } from '../../hooks/useSearchForm';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword, initialRating }) => {
  const valueKeyword = initialKeyword ? decodeURI(initialKeyword) : '';
  const valueRating = initialRating ? initialRating : RATINGS[0];

  const pushLocation = useLocation()[1];
  const { keyword, times, rating, buscarGif, agregarTimes } = useSearchForm({ valueKeyword, valueRating });

  const handleChange = evt => {
    buscarGif(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`${gifSearchBR}/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    agregarTimes(evt.target.value);
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

      <label>{times}</label>
    </form>
  );
};

export default SearchForm;
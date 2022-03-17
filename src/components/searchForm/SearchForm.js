import { gifSearchBR } from 'constants/appRouterConstants';
import { useState } from 'react';
import { useLocation } from 'wouter';

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const pushLocation = useLocation()[1];

  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    pushLocation(`${gifSearchBR}/${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='buscar gif aquí'
        type="text"
        onChange={handleChange}
        value={keyword}
      />
    </form>
  );
};

export default SearchForm;
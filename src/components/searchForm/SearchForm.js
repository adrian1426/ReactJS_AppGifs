import { useState } from 'react';

const SearchForm = (props) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = evt => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.handleSubmit(keyword);
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
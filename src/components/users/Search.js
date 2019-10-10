import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    // this funciona diferente en arrow functions, bindea automaticamente
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      console.log(text);
      searchUsers(text);
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Buscar usuario..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Buscar"
          className="btn btn-dark btn-block"
        />
      </form>

      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;

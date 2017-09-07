import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({onChange, onSearch}) => {
  return (
    <form onSubmit={onSearch}>
      <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={onChange}
      />
      </div>
      <input
        className="btn btn-success"
        type="submit"
        value="Search"
      />
    </form>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func,
  onSearch: PropTypes.func
};

SearchForm.defaultProps = {
  onChange: ()=>{},
  onSearch: ()=>{}
};

export default SearchForm;

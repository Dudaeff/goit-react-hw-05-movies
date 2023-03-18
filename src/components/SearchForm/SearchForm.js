import { PropTypes } from 'prop-types';
import { SearchBox, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ handleMovieSubmit }) => {
  return (
    <SearchBox onSubmit={handleMovieSubmit}>
      <input type="text" name="query" />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchBox>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  handleMovieSubmit: PropTypes.func.isRequired,
};

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'services/MovieAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') return;
    const abortController = new AbortController();

    getMovieByQuery(searchQuery, abortController).then(
      movies => movies && setMovies(movies.results)
    );

    return () => abortController.abort();
  }, [searchQuery]);

  const handleMovieSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (query.trim() === '') return setSearchParams({});

    setSearchParams({ query });
  };

  return (
    <section>
      <SearchForm handleMovieSubmit={handleMovieSubmit} />
      {searchQuery && <MoviesList movies={movies} />}
    </section>
  );
};

export default MoviesPage;

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieByQuery } from 'services/MovieAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
    if (query !== searchQuery) {
      setSearchQuery(query);
    }
  };

  return (
    <section>
      <form onSubmit={handleMovieSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesPage;

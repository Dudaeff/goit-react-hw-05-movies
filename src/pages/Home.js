import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/MovieAPI';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    getTrendingMovies(abortController).then(
      movies => movies && setMovies(movies.results)
    );

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;

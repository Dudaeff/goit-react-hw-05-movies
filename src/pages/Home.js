import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/MovieAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

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
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </section>
  );
};

export default HomePage;

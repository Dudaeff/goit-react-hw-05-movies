import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/MovieAPI';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const abortController = new AbortController();

    getMovieById(movieId, abortController).then(
      movie => movie && setMovie(movie)
    );

    return () => abortController.abort();
  }, [movieId]);

  const {
    poster_path,
    genres,
    vote_count,
    original_title,
    overview,
    release_date,
  } = movie;
  const genresString = genres && genres.map(genre => genre.name).join(',');
  const score = vote_count / 100;

  return (
    <section>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      </div>
      <ul>
        <li>
          <h1>{original_title}</h1>
          <p>{release_date}</p>
        </li>
        <li>
          <p>User score: {score.toFixed(2)}%</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{overview}</p>
        </li>
        <li>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </li>
      </ul>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={'cast'}>Casts</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default MoviesDetailsPage;

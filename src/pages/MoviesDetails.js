import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/MovieAPI';
const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  console.log(movie);

  useEffect(() => {
    const abortController = new AbortController();

    getMovieById(movieId, abortController).then(
      movie => movie && setMovie(movie)
    );

    return () => abortController.abort();
  }, [movieId]);

  const { poster_path, genres, original_title, overview } = movie;
  const genresString = genres && genres.map(genre => genre.name).join(',');

  return (
    <section>
      <h1>{original_title}</h1>
      <div>
        <img src={poster_path} alt={original_title} />
      </div>
      <ul>
        <li>{overview}</li>
        <li>
          <p>{genresString}</p>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export default MoviesDetailsPage;

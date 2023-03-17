import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/MovieAPI';

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const abortConrtoller = new AbortController();

    getMovieDetails(params.movieId, 'casts', abortConrtoller).then(
      response => response && setCasts(response.cast)
    );

    return () => abortConrtoller.abort();
  }, [params.movieId]);

  return (
    <section>
      <ul>
        {casts.map(({ id, original_name, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={original_name || name}
            />
            <p>{original_name || name}</p>
            <p>Chatacter: {character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CastPage;

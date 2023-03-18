import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/MovieAPI';
import CastsList from 'components/CastsList/CastsList';

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
      {casts.length === 0 && <strong>We dont have casts for this movie</strong>}
      {casts.length > 0 && <CastsList casts={casts} />}
    </section>
  );
};

export default CastPage;

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieById } from 'services/MovieAPI';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import { GoBackBtn, InformationLinksList } from './MoviesDetails.styled';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();
  const backLinkhref = location.state?.from ?? '/movies';

  useEffect(() => {
    const abortController = new AbortController();

    getMovieById(movieId, abortController).then(
      movie => movie && setMovie(movie)
    );

    return () => abortController.abort();
  }, [movieId]);

  return (
    <section>
      <GoBackBtn to={backLinkhref}>Go back</GoBackBtn>
      <MovieDescription movie={movie} />

      <h4>Additional information</h4>
      <InformationLinksList>
        <li>
          <Link to={'cast'} state={{ from: backLinkhref }}>
            Casts
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={{ from: backLinkhref }}>
            Reviews
          </Link>
        </li>
      </InformationLinksList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MoviesDetailsPage;

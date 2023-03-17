import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/MovieAPI';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const abortConrtoller = new AbortController();

    getMovieDetails(params.movieId, 'reviews', abortConrtoller).then(
      response => response && setReviews(response.results)
    );

    return () => abortConrtoller.abort();
  }, [params.movieId]);

  return (
    <section>
      <ul>
        {reviews.map(
          ({
            id,
            content,
            author_details: { avatar_path, username, rating },
          }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${avatar_path}`}
                alt={username}
              />
              <p>{username}</p>
              <p>Rating: {rating}</p>
              <p>Review: {content}</p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default ReviewsPage;

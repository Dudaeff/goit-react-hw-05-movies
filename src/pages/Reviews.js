import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/MovieAPI';
import ReviewsList from 'components/ReviewsList/ReviewsList';

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
      {reviews.length === 0 && (
        <strong>We dont have any reviews for this movie</strong>
      )}
      {reviews.length > 0 && <ReviewsList reviews={reviews} />}
    </section>
  );
};

export default ReviewsPage;

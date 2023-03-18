import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
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
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      author_details: PropTypes.object,
    })
  ).isRequired,
};

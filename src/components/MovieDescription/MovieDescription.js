import PropTypes from 'prop-types';
import {
  DescriptionList,
  DescriptionView,
  ImageWrapper,
  DescriptionListItem,
} from './MovieDescription,styled';

const MovieDescription = ({ movie }) => {
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
    <DescriptionView>
      <ImageWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      </ImageWrapper>
      <DescriptionList>
        <DescriptionListItem>
          <h1>{original_title}</h1>
          <p>{release_date}</p>
        </DescriptionListItem>
        <DescriptionListItem>
          <p>User score: {score.toFixed(2)}%</p>
        </DescriptionListItem>
        <DescriptionListItem>
          <h2>Overview</h2>
          <p>{overview}</p>
        </DescriptionListItem>
        <DescriptionListItem>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </DescriptionListItem>
      </DescriptionList>
    </DescriptionView>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movie: PropTypes.object.isRequired,
};

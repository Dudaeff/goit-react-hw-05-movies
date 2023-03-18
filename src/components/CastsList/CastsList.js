import PropTypes from 'prop-types';
import { CastsMap, CastsMapItem } from './CastsList.styled';

const CastsList = ({ casts }) => {
  return (
    <CastsMap>
      {casts.map(({ id, original_name, name, character, profile_path }) => (
        <CastsMapItem key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={original_name || name}
          />
          <p>{original_name || name}</p>
          <p>Chatacter: {character}</p>
        </CastsMapItem>
      ))}
    </CastsMap>
  );
};

export default CastsList;

CastsList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      name: PropTypes.string,
      caches: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

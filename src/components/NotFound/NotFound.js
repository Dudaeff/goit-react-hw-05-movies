import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>The page was not found..</h1>
      <Link to={'/'}>Go to Home page</Link>
    </>
  );
};

export default NotFound;

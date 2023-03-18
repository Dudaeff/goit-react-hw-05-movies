import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '6dbb7affd9e1114a59f95efe62ebacfd';

export const getTrendingMovies = async abortController => {
  const source = 'trending/movie/day';
  const url = `${source}?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url, { signal: abortController.signal });
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_CANCELED') return;
    console.error(error.message);
  }
};

export const getMovieByQuery = async (query, abortController) => {
  const source = 'search/movie';
  const url = `${source}?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await axios.get(url, { signal: abortController.signal });
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_CANCELED') return;
    console.error(error.message);
  }
};

export const getMovieById = async (movieId, abortController) => {
  const url = `/movie/${movieId}?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url, { signal: abortController.signal });
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_CANCELED') return;
    console.error(error.message);
  }
};

export const getMovieDetails = async (movieId, details, abortController) => {
  const source = `/movie/${movieId}/${details}`;
  const url = `${source}?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url, { signal: abortController.signal });
    return response.data;
  } catch (error) {
    if (error.code === 'ERR_CANCELED') return;
    console.error(error.message);
  }
};

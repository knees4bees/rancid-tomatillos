const handleErrors = (response, message) => {
  if (!response.ok) {
    throw new Error('Oops! Something went wrong. Please try again.');
  }
  return response.json();
};

const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(handleErrors);
};

export const getSelectedMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(handleErrors);
};

export default getAllMovies;
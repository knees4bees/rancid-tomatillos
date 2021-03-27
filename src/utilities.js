const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .catch(err => console.log(err))
}

export const getSelectedMovie = (id) => {
  console.log('what up');

  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .catch(err => console.log(err))
}



export default getAllMovies;
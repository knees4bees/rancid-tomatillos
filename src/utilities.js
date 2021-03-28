const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
};

export const getSelectedMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
};

export const handleErrors = (response) => {
  if (!response.ok) {
      throw new Error();
    }

    return response.json();    
}

export default getAllMovies;

// (response) => {
//         this.setState({ fetchStatus: response.status });

//         if (!response.ok) {
//           throw new Error();
//         }

//         return response.json();
//       }
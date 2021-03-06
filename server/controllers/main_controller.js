const axios = require("axios");
const baseUrl = "/api/";
let movies = [];
let favMovies = [];
let id = 0;

module.exports = {
  create: () => {
    res.status(200).send(movies);
  },

  getmovie: (req, res, next) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.PASSWORD_KEY
        }&language=en-US&query=batman&page=1&include_adult=false`
      )
      .then(response => {
        movies = response.data.results;
        res.status(200).send(movies);
      })
      .catch(e => console.log(e));
  },

  favoriteMovies: (req, res, next) => {
    res.status(200).send(favMovies);
  },

  addFavs: (req, res, next) => {
    let { id } = req.body;
    const index = movies.findIndex(movie => movie.id == parseInt(id));
    let deletedMovie = movies.splice(index, 1);

    favMovies.push(deletedMovie[0]);
    res.status(200).send({ movies, favMovies });
  },

  increment: (req, res, next) => {
    const updateRating = req.params.id;
    const movieIndex = movies.findIndex(movie => movie.id == updateRating);
    let movie = movies[movieIndex];

    movies[movieIndex] = {
      ...movie,
      vote_average: movie.vote_average + 1,
      vote_count: movie.vote_count + 1
    };
    res.status(200).send(movies);
  },
  decrement: (req, res, next) => {
    const updateRating = req.params.id;
    const movieIndex = movies.findIndex(movie => movie.id == updateRating);
    let movie = movies[movieIndex];

    movies[movieIndex] = {
      ...movie,
      vote_average: movie.vote_average - 1
    };
    res.status(200).send(movies);
  },
  delete: (req, res, next) => {
    const deleteId = req.params.id;
    moviesIndex = movies.findIndex(movies => movies.id == deleteId);
    movies.splice(moviesIndex, 1);

    res.status(200).send(movies);
  }
};

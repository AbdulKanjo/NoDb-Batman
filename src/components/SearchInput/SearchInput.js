import React, { Component } from "react";

import axios from "axios";

class ListOfMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    axios.get("/api/movie").then(res => {
      this.setState({ movies: res.data });
    });
  }
  // handelChange(filter) {
  //   this.setState({ movies: filter });
  // }

  render() {
    let movies = this.state.movies.map((movies, i) => {
      return (
        <div key={i}>
          <div>
            <h3>{movies.title}</h3>
            <img
              width="200"
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            />

            <h5> Popularity: {movies.popularity} views</h5>
            <h5>
              Votes: {movies.vote_count} vote Average: {movies.vote_average}
            </h5>
            <h5> Released: {movies.release_date} </h5>
          </div>
        </div>
      );
    });

    return <div>{movies}</div>;
  }
}

export default ListOfMovies;

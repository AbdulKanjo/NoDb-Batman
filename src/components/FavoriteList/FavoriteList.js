import React, { Component } from "react";
import axios from "axios";
import toast from "react-toastify";

class FavoritList extends Component {
  constructor(props) {
    super();
    this.state = {
      FavoritList: [],
      userInput: ""
    };
  }
  componentDidMount() {
    axios.get("/api/movie/favorites").then(res => {
      this.setState({ FavoritList: res.data });
    });
  }
  removeMovie(id) {
    axios.delete("/api/movie" + `/${id}`).then(res => {
      toast.success("Successfully Deleted");
      this.setState({ FavoritList: res.data });
    });
  }

  render() {
    let favmovies = this.state.FavoritList.map((e, i) => {
      return (
        <div key={i}>
          <h3>{e.title}</h3>
          <img
            width="200"
            src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
          />

          <h5> popularity: {e.popularity} views</h5>
          <h5>
            votes: {e.vote_count} vote Average: {e.vote_average}
          </h5>
          <h5> Released: {e.release_date} </h5>
        </div>
      );
    });
    return <div>{favmovies}</div>;
  }
}
export default FavoritList;

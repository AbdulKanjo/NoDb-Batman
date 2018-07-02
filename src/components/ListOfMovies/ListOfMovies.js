import React, { Component } from "react";
import "./ListOfMovies.css";
import axios from "axios";
import toast from "react-toastify";
import swal from "sweetalert2";
import Button from "../Buttons/buttons";

class ListOfMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filterString: "",
      faveMovies: [],
      deleted: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  componentDidMount() {
    axios.get("/api/movie").then(res => {
      this.setState({ movies: res.data });
    });
    axios.get("/api/movie/favorites").then(res => {
      this.setState({ faveMovies: res.data });
    });
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  handleClick(id) {
    axios.post(`/api/movie/`, { id }).then(res => {
      console.log(res.data);
      this.setState({
        movies: res.data.movies,
        faveMovies: res.data.favMovies
      });
    });
  }

  handleDelete(e) {
    axios.delete(`/api/movie/${e}`).then(res => {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          swal("Deleted!", "The movie has been deleted", "success");
        }
      });
      this.setState({ movies: res.data });
    });
  }
  // handleDeleteBack(e) {
  //   axios.delete(`/api/movie/delete/${e}`).then(res => {
  //     swal({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       type: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!"
  //     }).then(result => {
  //       if (result.value) {
  //         swal("Deleted!", "The movie has been deleted", "success");
  //       }
  //     });
  //     this.setState({ movies: res.data });
  //   });
  // }

  handleIncrement(e) {
    axios.put(`/api/movie/${e}`).then(res => {
      this.setState({ movies: res.data });
    });
  }
  handleDecrement(e) {
    axios.put(`/api/movie/${e}/-`).then(res => {
      this.setState({ movies: res.data });
    });
  }
  render() {
    console.log(this.state.movies);

    let search = this.state.movies
      .filter((e, i) => {
        return e.title.includes(this.state.filterString);
      })
      .map((e, i) => {
        return (
          <div className="each-el" key={i}>
            <div className="movies">
              <h3 className="title">{e.title}</h3>
              <div className="cvb">
                <img
                  className="pic"
                  width="200"
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                />

                <h5> Popularity: {e.popularity} views</h5>
                <h5>
                  Votes: {e.vote_count} Ratings: {e.vote_average}
                </h5>
                <h5> Released: {e.release_date} </h5>
                <Button
                  handleClick={this.handleClick}
                  handleDelete={this.handleDelete}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  id={e.id}
                />
              </div>
            </div>
          </div>
        );
      });
    let showMovies = this.state.faveMovies.map((e, i) => {
      console.log(e);
      return (
        <div className="each-el" key={i}>
          <div className="movies">
            <h3 className="title">{e.title}</h3>
            <div className="cvb">
              <img
                className="pic"
                width="400"
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              />

              <h5> Popularity: {e.popularity} views</h5>
              <h5>
                Votes: {e.vote_count} vote Average: {e.vote_average}
              </h5>
              <h5> Released: {e.release_date} </h5>
              {/* <button onClick={() => this.handleDeleteBack(e.id)}>
                deletef
              </button> */}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {this.props.movies ? (
          <div>
            <div className="search">
              <input
                className="search"
                placeholder="Search Movies"
                onChange={e => this.handleChange(e.target.value)}
              />
              <div className="movies" />
            </div>

            <div className="border">{search}</div>
          </div>
        ) : (
          <div className="border">{showMovies}</div>
        )}
      </div>
    );
  }
}

export default ListOfMovies;

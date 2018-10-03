import React, { Component } from "react";
import axios from "axios";
import router from "./router";
import "./App.css";
import "./components/ListOfMovies/ListOfMovies";
import ListOfMovies from "./components/ListOfMovies/ListOfMovies";
import FavoriteList from "./components/FavoriteList/FavoriteList";
import NavigationList from "./components/NavigationList/NavigationList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      favs: false
    };
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }
  handleFavorite() {
    this.setState({
      home: false,
      favs: true
    });
  }

  handleHome() {
    this.setState({
      home: true,
      favs: false
    });
  }

  render() {
    return (
      <div>
        <NavigationList
          Favorites={this.handleFavorite}
          home={this.handleHome}
        />
        <ListOfMovies movies={this.state.home} />
      </div>
    );
  }
}

export default App;

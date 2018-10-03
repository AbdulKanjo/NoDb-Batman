import React from "react";
import { Switch, Route } from "react-router-dom";

import ListOfMovies from "./components/ListOfMovies/ListOfMovies";
import Details from "./components/ListOfMovies/Details";

export default (
  <Switch>
    <Route exact path="/" component={ListOfMovies} />
    <Route path="/moviedets" component={Details} />
  </Switch>
);

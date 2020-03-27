import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./nav/Nav";

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

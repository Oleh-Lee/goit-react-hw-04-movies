import React, { Component } from "react";
import services from "../services";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    services
      .getMovies()
      .then(data => this.setState({ movies: data.data.results }));
  }

  render() {
    return (
      <>
        <h2>Trending Today</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: {
                    id: movie.id
                  }
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

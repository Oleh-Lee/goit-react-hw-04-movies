import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import services from "../services";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";

export default class MovieDetailsPage extends Component {
  state = {
    details: {}
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    services.getMoviesDetails(id).then(({ data }) => {
      this.setState({ details: data });
    });
  }

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push("/");
  };

  render() {
    //   const somePath = "https://image.tmdb.org/t/p/original"
    const {
      details: { poster_path, id, title, overview, genres = [],vote_average }
    } = this.state;
    const { match, location } = this.props;
    // console.log(details)

    return (
      <div className="main">
        <button type="button" onClick={this.handleGoback}>
          Go back
        </button>

        <div>
          <div className="mainDiv">
            <img
              className="mainPoster"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="pic"
              width="400"
            />
            <div>
              <h2>{title}</h2>
              <p>User score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
    <p>{genres.map(genre => <span key={genre.id}>{genre.name} </span>)}</p>
            </div>
          </div>
<p>Additional information</p>
          <ul >
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}/cast`,
                  state: { ...location }
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}/reviews`,
                  state: { ...location }
                }}
              >
                Reviews
              </Link>
            </li>
          </ul >
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </div>
    );
  }
}

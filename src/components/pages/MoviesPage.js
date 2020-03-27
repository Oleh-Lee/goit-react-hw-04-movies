import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "../services";
import Search from "../search/Serch";
import queryString from "query-string";

// const getCategoryFromLOcation = location => queryString.parse(props.location.search).category

export default class MoviesPage extends Component {
  state = {
    movies: []
  };

  onSearch = query => {
    queryString.parse(
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`
      })
    );
    services.getMoviesSearch(query).then(({ data }) => {
      this.setState({ movies: data.results });
    });
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    // console.log("this.props.location", this.props.location);
    // console.log(queryString.parse(this.props.location.search))

    return (
      <div>
        <Search onSearch={this.onSearch} />

        <ul>
          {movies.map(elem => (
            <li key={elem.id}>
              <Link
                to={{
                  pathname: `/movies/${elem.id}`,
                  state: { from: location }
                }}
              >
                {elem.title || elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

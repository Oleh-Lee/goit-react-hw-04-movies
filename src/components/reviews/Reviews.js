import React, { Component } from "react";
import services from "../services";

export default class Reviews extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    
    const id = this.props.match.params.movieId;
    services
      .getMoviesReviews(id)
      .then(({ data }) => {
        this.setState({ results: data.results });
      })
  }

  render() {
    const { results=[] } = this.state;
    // console.log(results)
    return (
      <div>

{results.length ? (
  <ul>
  {results.map(results => ( 
    <li
     key={results.id}>
      <p>Author: {results.author}</p>
      <p>{results.content}</p>
    </li>
  ))}
</ul>
) : (
  <p>No reviews found</p>
)}
          
      </div>
    );
  }
}
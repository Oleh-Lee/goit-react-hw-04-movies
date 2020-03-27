import React, { Component } from "react";
import services from "../services";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
   
    const id = this.props.match.params.movieId;
    services
      .getMoviesCast(id)
      .then(({ data }) => {
        this.setState({ cast: data.cast });
      })
  }

  render() {
    const { cast=[] } = this.state;
    console.log(cast)
    return (
      <div>
       <ul>
          {cast.map(cast => (
            <li
              
              key={cast.cast_id}
              name="scroll-to-element"
            >
              <div >
                <p >Character:</p>
                <p >{cast.character}</p>
                <div >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    width={100}
                    alt={"pic"}
                  />
                </div>

                <p >{cast.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
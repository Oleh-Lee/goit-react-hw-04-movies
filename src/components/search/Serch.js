import React, { Component } from "react";

export default class Search extends Component {
  state = {
    inputValue: ""
  };

  handleChange =  event  => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        className="search"
          type="text"
          value={inputValue}
          placeholder="Search movies..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

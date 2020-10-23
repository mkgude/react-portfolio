import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <h2>Type in your month below...</h2>
        <input
          className="form-control input"
          type="text"
          onChange={this.onchange}
          value={this.state.search}
          placeholder="Month"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default Search;

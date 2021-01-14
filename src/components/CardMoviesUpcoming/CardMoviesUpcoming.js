import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CardMoviesUpcoming.scss";

export default class CardMoviesUpcoming extends Component {
  render() {
    return (
      <div className="card-movies-upcoming">
        <img src={this.props.data.image} alt="" />
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.genre}</p>
        <Link to={`/details/${this.props.data.id}`} className="btn-details">
          Details
        </Link>
      </div>
    );
  }
}

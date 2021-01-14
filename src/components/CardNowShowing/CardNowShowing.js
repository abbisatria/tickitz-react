import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./CardNowShowing.scss";

export default class CardNowShowing extends Component {
  render() {
    return (
      <div className="card-movies-now-showing">
        <img src={this.props.data.image} alt={this.props.data.title} />
        <div className="title-movies">
          <h1>{this.props.data.title}</h1>
          <p>{this.props.data.genre}</p>
        </div>
        <div className="button-movies">
          <Link to={`/details/${this.props.data.id}`} className="btn-details">
            Details
          </Link>
          <br />
          <br />
          <Button className="btn-primary book-now">Book-now</Button>
        </div>
      </div>
    );
  }
}

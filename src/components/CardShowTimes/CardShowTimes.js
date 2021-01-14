import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "../Button/Button";
import { Row, Col } from "react-bootstrap";

import "./CardShowTimes.scss";

class CardShowTimes extends Component {
  state = {
    time: "",
  };

  changeTime = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  bookNow = (movieId, cinemaId, showtimesId, date) => {
    this.props.history.push(`/order/${movieId}/${cinemaId}/${showtimesId}`, {
      data: date,
    });
  };
  render() {
    return (
      <Col md={4} key={String(this.props.data.id)}>
        <div className="card-showtimes">
          <Row>
            <Col
              md={5}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={this.props.data.image} alt={this.props.data.name} />
            </Col>
            <Col md={7} className="pt-2 pt-md-0">
              <h3>{this.props.data.name}</h3>
              <p>{this.props.data.address}</p>
            </Col>
          </Row>
          <hr />
          <div className="form-price">
            <div className="showtimes mb-3">
              <Row className="row-cols-4">
                {this.props.data.showtimes.map((show, index) => {
                  return (
                    <label className="col" key={String(index)}>
                      <input
                        type="radio"
                        name="time"
                        value={show.id}
                        disabled={show.status === "sold" ? true : false}
                        onChange={(event) => this.changeTime(event)}
                      />
                      <span>{show.time}</span>
                    </label>
                  );
                })}
              </Row>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h6>Price</h6>
              <h3>${this.props.data.price}/seat</h3>
            </div>
            <div className="d-flex justify-content-between">
              <Button
                onClick={() =>
                  this.bookNow(
                    this.props.movieId,
                    this.props.data.id,
                    this.state.time,
                    this.props.date
                  )
                }
                className="btn-primary book-now px-4 py-2"
              >
                Book Now
              </Button>
              <Link to="/" className="btn-add-cart px-4 py-2">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default withRouter(CardShowTimes);

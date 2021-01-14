import React, { Component } from "react";
import Moment from "react-moment";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./OrderMovie.scss";

class OrderMovie extends Component {
  state = {
    seat: [],
    date: this.props.date,
  };
  componentDidMount() {
    console.log(this.props);
  }
  // componentDidUpdate() {
  //   console.log(this.state.seat);
  // }
  selectSeat = (id) => {
    const { seat } = this.state;
    let newArray = [];
    if (seat.indexOf(id) === -1) {
      seat.push(id);
      newArray = seat;
    } else {
      newArray = seat.filter((item) => item !== id);
    }
    this.setState({
      seat: newArray,
    });
  };
  checkOut = (movieId, cinemaId, showtimesId) => {
    this.props.history.push(`/payment/${movieId}/${cinemaId}/${showtimesId}`, {
      data: this.state,
    });
  };
  render() {
    return (
      <div className="order-movie">
        <Container>
          <Row>
            <Col md={8}>
              <div className="movie-selected d-none d-md-block">
                <h2>Movie Selected</h2>
                <div className="card-movie-selected d-flex justify-content-between align-items-center">
                  <h3>{this.props.movie.title}</h3>
                  <Link to="/" className="btn-change-movie px-3 py-2">
                    Change movie
                  </Link>
                </div>
              </div>
              <div className="choose-your-seat">
                <h2>Choose Your Seat</h2>
                <div className="card-seat">
                  <h5>Screen</h5>
                  <hr />
                  <table>
                    <tbody>
                      <tr>
                        <td className="seats">A</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A2")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A3")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A6")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A9")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A12")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("A14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">B</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B2")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B3")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B9")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B12")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("B14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">C</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C2")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C3")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C9")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C12")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("C14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">D</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D2")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D3")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D9")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D12")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("D14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">E</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E2")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E3")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E4")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E9")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E12")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("E14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">F</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F2")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F3")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F9")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F10")}
                            name="seat"
                          />
                        </td>
                        <td colSpan="2">
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F11, F12")}
                            name="seat"
                            className="seats-love"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F13")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("F14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="seats">G</td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G1")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G2")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G3")}
                            name="seat"
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G4")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G5")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G6")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G7")}
                            name="seat"
                          />
                        </td>
                        <td className="seatGap"></td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G8")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G9")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G10")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G11")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G12")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G13")}
                            name="seat"
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onClick={() => this.selectSeat("G14")}
                            name="seat"
                          />
                        </td>
                      </tr>
                      <tr className="seats-number">
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td className="seatGap"></td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="seating-key">
                    <h4>Seating key</h4>
                    <Row>
                      <Col xs={1} className="d-sm-block d-md-none">
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      </Col>
                      <Col xs={5} className="d-sm-block d-md-none">
                        <p>A - G</p>
                      </Col>
                      <Col xs={1} className="d-sm-block d-md-none">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </Col>
                      <Col xs={5} className="d-sm-block d-md-none">
                        <p>1 - 14</p>
                      </Col>
                      <Col md={1} xs={1}>
                        <div className="available"></div>
                      </Col>
                      <Col md={2} xs={5}>
                        <p>Available</p>
                      </Col>
                      <Col md={1} xs={1}>
                        <div className="selected"></div>
                      </Col>
                      <Col md={2} xs={5}>
                        <p>Selected</p>
                      </Col>
                      <Col md={1} xs={1}>
                        <div className="love-nest"></div>
                      </Col>
                      <Col md={2} xs={5}>
                        <p>Love nest</p>
                      </Col>
                      <Col md={1} xs={1}>
                        <div className="sold"></div>
                      </Col>
                      <Col md={2} xs={5}>
                        <p>Sold</p>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="d-md-none d-sm-block">
                  <div className="card-choosed d-flex justify-content-between align-items-center">
                    <h6>Choosed</h6>
                    <h5>{this.state.seat.join(", ")}</h5>
                  </div>
                </div>
                <Row className="my-4">
                  <Col className="d-none d-md-block">
                    <Link to="/" className="btn btn-your-movie py-3 w-100">
                      Change your movie
                    </Link>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="btn-primary py-3 w-100"
                      onClick={() =>
                        this.checkOut(
                          this.props.movie.id,
                          this.props.cinema.id,
                          this.props.time.id
                        )
                      }
                    >
                      Checkout now
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4} className="d-none d-md-block">
              <div className="order-info">
                <h2>Order Info</h2>
                <div className="card-order-info">
                  <div className="cinema">
                    <img src={this.props.cinema.image} alt="" />
                    <h2>{this.props.cinema.name}</h2>
                  </div>
                  <div className="detail-order">
                    <div className="d-flex justify-content-between">
                      <p>Movie selected</p>
                      <h6>{this.props.movie.title}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>
                        <Moment format="dddd, D MMMM YYYY">
                          {this.props.date}
                        </Moment>
                      </p>
                      <h6>{this.props.time.time}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>One ticket price</p>
                      <h6>${this.props.cinema.price}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Seat choosed</p>
                      <h6>{this.state.seat.join(", ")}</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="total-payment">
                    <div className="d-flex justify-content-between">
                      <h4>Total Payment</h4>
                      <h3>
                        ${this.state.seat.length * this.props.cinema.price}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(OrderMovie);

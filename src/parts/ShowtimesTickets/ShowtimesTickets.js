import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormInputDate from "../../components/Form/FormInputDate/FormInputDate";
import FormInputLocation from "../../components/Form/FormInputLocation/FormInputLocation";
import { Link, withRouter } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./ShowtimesTickets.scss";

import cinemaList from "../../dummy/cinemaList";

class ShowtimesTickets extends Component {
  state = {
    showtimesTickets: cinemaList,
    time: "",
  };
  changeTime = (event) => {
    // console.log({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };
  bookNow = (movieId, cinemaId, showtimesId) => {
    this.props.history.push(`/order/${movieId}/${cinemaId}/${showtimesId}`);
  };
  render() {
    return (
      <div className="showtimes-tickets">
        <Container>
          <h1>Showtimes and Tickets</h1>
          <Form className="form-showtimes my-5">
            <FormInputDate name="date" />
            <FormInputLocation>Purwokerto</FormInputLocation>
          </Form>
          <Row>
            {this.state.showtimesTickets.map((value, index) => {
              return (
                <Col md={4} key={String(index)}>
                  <div className="card-showtimes">
                    <Row>
                      <Col
                        md={5}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <img src={value.image} alt={value.name} />
                      </Col>
                      <Col md={7} className="pt-2 pt-md-0">
                        <h3>{value.name}</h3>
                        <p>{value.address}</p>
                      </Col>
                    </Row>
                    <hr />
                    <div className="form-price">
                      <div className="showtimes mb-3">
                        <Row className="row-cols-4">
                          {value.showtimes.map((show, index) => {
                            return (
                              <label className="col" key={String(index)}>
                                <input
                                  type="radio"
                                  name="time"
                                  value={show.id}
                                  disabled={
                                    show.status === "sold" ? true : false
                                  }
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
                        <h3>${value.price}/seat</h3>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Button
                          onClick={() =>
                            this.bookNow(
                              this.props.movieId,
                              value.id,
                              this.state.time
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
            })}
          </Row>
          <h5>
            <Link to="/" className="view-more">
              View More
            </Link>
          </h5>
        </Container>
      </div>
    );
  }
}

export default withRouter(ShowtimesTickets);

import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormInputDate from "../../components/Form/FormInputDate/FormInputDate";
import FormInputLocation from "../../components/Form/FormInputLocation/FormInputLocation";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./ShowtimesTickets.scss";

import ebv from "../../assets/images/ebv_id.png";
import cineone21 from "../../assets/images/CineOne21.png";
import hiflix from "../../assets/images/hiflix.png";

class ShowtimesTickets extends Component {
  state = {
    showtimesTickets: [
      {
        id: 1,
        cinemas: "ebv.id",
        street: "Whatever street No. 12, South Purwokerto",
        image: ebv,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:30pm",
          "12:00pm",
          "02:00pm",
          "04:30pm",
          "07:00pm",
          "08:30pm",
        ],
      },
      {
        id: 2,
        cinemas: "CineOne21",
        street: "Downcare street  No. 21, East Purwokerto",
        image: cineone21,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:00pm",
          "12:00pm",
          "02:00pm",
          "04:00pm",
          "06:00pm",
          "08:00pm",
        ],
      },
      {
        id: 3,
        cinemas: "hiflix Cinema",
        street: "Colonel street No. 2, East Purwokerto",
        image: hiflix,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:00am",
          "12:00pm",
          "02:00pm",
          "04:00pm",
          "06:00pm",
          "08:00pm",
        ],
      },
      {
        id: 4,
        cinemas: "ebv.id",
        street: "Whatever street No. 12, South Purwokerto",
        image: ebv,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:00am",
          "12:00pm",
          "02:00pm",
          "04:00pm",
          "06:00pm",
          "08:00pm",
        ],
      },
      {
        id: 5,
        cinemas: "CineOne21",
        street: "Downcare street  No. 21, East Purwokerto",
        image: cineone21,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:00am",
          "12:00pm",
          "02:00pm",
          "04:00pm",
          "06:00pm",
          "08:00pm",
        ],
      },
      {
        id: 6,
        cinemas: "hiflix Cinema",
        street: "Colonel street No. 2, East Purwokerto",
        image: hiflix,
        price: "$10.00",
        showtimes: [
          "08:30am",
          "10:00am",
          "12:00pm",
          "02:00pm",
          "04:00pm",
          "06:00pm",
          "08:00pm",
        ],
      },
    ],
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
                        <img src={value.image} alt={value.cinemas} />
                      </Col>
                      <Col md={7} className="pt-2 pt-md-0">
                        <h3>{value.cinemas}</h3>
                        <p>{value.street}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Form className="form-price">
                      <div className="showtimes mb-3">
                        <Row className="row-cols-4">
                          {value.showtimes.map((show, index) => {
                            return (
                              <label className="col" key={String(index)}>
                                <input
                                  type="radio"
                                  name="showtimes"
                                  value={show}
                                />
                                <span>{show}</span>
                              </label>
                            );
                          })}
                        </Row>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <h6>Price</h6>
                        <h3>{value.price}/seat</h3>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Button className="btn-primary book-now px-4 py-2">
                          Book Now
                        </Button>
                        <Link to="/" className="btn-add-cart px-4 py-2">
                          Add to cart
                        </Link>
                      </div>
                    </Form>
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

export default ShowtimesTickets;

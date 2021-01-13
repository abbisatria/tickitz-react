import React, { Component } from "react";
import Moment from "react-moment";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo-tickitz.png";
import qrCode from "../../assets/images/qr_code.png";

import "./ProofOfPayment.scss";

class ProofOfPayment extends Component {
  render() {
    return (
      <div className="proof-of-payment">
        <Container>
          <div className="card-proof-of-payment">
            <h2 className="d-none d-md-block">Proof of Payment</h2>
            <div className="card-ticket">
              <div className="header-card d-none d-md-block">
                <Row>
                  <Col md={8}>
                    <div className="admit-one">
                      <Row className="d-flex align-items-center">
                        <Col>
                          <img src={logo} alt="logo" />
                        </Col>
                        <Col>
                          <h4>Admit One</h4>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col
                    md={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img src={logo} alt="logo" />
                  </Col>
                </Row>
              </div>
              <Row>
                <Col md={8} className="order-2 order-lg-1">
                  <div className="detail-ticket">
                    <Row>
                      <Col md={12} xs={7} className="order-1 order-lg-1">
                        <p>Movie</p>
                        <h6>{this.props.movie.title}</h6>
                      </Col>
                      <Col md={4} xs={7} className="mt-3 order-3 order-lg-2">
                        <p>Date</p>
                        <h6>
                          <Moment format="D MMMM">{this.props.date}</Moment>
                        </h6>
                      </Col>
                      <Col md={4} xs={5} className="mt-3 order-4 order-lg-3">
                        <p>Time</p>
                        <h6>{this.props.time.time}</h6>
                      </Col>
                      <Col md={4} xs={5} className="mt-lg-3 order-2 order-lg-4">
                        <p>Category</p>
                        <h6>PG-13</h6>
                      </Col>
                      <Col md={4} xs={7} className="mt-3 order-5 order-lg-5">
                        <p>Count</p>
                        <h6>{this.props.seat.length} pieces</h6>
                      </Col>
                      <Col md={4} xs={5} className="mt-3 order-6 order-lg-6">
                        <p>Seats</p>
                        <h6>{this.props.seat.join(", ")}</h6>
                      </Col>
                      <Col md={4} className="d-none d-md-block mt-3 order-lg-7">
                        <p>Price</p>
                        <h5>
                          ${this.props.seat.length * this.props.cinema.price}.00
                        </h5>
                      </Col>
                      <Col xs={12} className="d-md-none d-sm-block order-7">
                        <div className="card-total">
                          <h5>Total</h5>
                          <h5>
                            ${this.props.seat.length * this.props.cinema.price}
                            .00
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col
                  md={4}
                  className="order-1 order-lg-2 d-flex justify-content-center align-items-center"
                >
                  <img src={qrCode} alt="qrCode" />
                </Col>
              </Row>
            </div>
            <div className="download-or-print mt-5">
              <Link to="/" className="link-download-print">
                <i className="fa fa-download"></i>Download
              </Link>
              <Link to="/" className="link-download-print">
                <i className="fa fa-print"></i>Print
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProofOfPayment;

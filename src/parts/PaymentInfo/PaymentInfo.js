import React, { Component } from "react";
import Moment from "react-moment";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import FormInputText from "../../components/Form/FormInputText/FormInputText";
import Button from "../../components/Button/Button";
import FormInputNumber from "../../components/Form/FormInputNumber/FormInputNumber";

import "./PaymentInfo.scss";

import google from "../../assets/icon/ic_google_pay.png";
import visa from "../../assets/icon/ic_visa.png";
import gopay from "../../assets/icon/ic_gopay.png";
import paypal from "../../assets/icon/ic_paypal.png";
import dana from "../../assets/icon/ic_dana.png";
import bca from "../../assets/icon/ic_bca.png";
import bri from "../../assets/icon/ic_bri.png";
import ovo from "../../assets/icon/ic_ovo.png";

class PaymentInfo extends Component {
  state = {
    seat: this.props.seat,
    date: this.props.date,
  };
  payOrder = (movieId, cinemaId, showtimesId) => {
    this.props.history.push(`/ticket/${movieId}/${cinemaId}/${showtimesId}`, {
      data: this.state,
    });
  };
  render() {
    return (
      <div className="payment">
        <Container>
          <Row>
            <Col md={8}>
              <div className="payment-info">
                <h2 className="d-none d-md-block">Payment Info</h2>
                <div className="card-payment-info">
                  <div className="d-none d-md-block">
                    <Row>
                      <Col md={4}>
                        <p>Date & time</p>
                      </Col>
                      <Col md={8}>
                        <h6>
                          <Moment format="dddd, D MMMM YYYY">
                            {this.props.date}
                          </Moment>{" "}
                          at {this.props.time.time}
                        </h6>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={4}>
                        <p>Movie title</p>
                      </Col>
                      <Col md={8}>
                        <h6>{this.props.movie.title}</h6>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={4}>
                        <p>Cinema name</p>
                      </Col>
                      <Col md={8}>
                        <h6>{this.props.cinema.name} Cinema</h6>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={4}>
                        <p>Number of tickets</p>
                      </Col>
                      <Col md={8}>
                        <h6>{this.props.seat.length} pieces</h6>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                  <Row>
                    <Col md={7} xs={7}>
                      <p>Total payment</p>
                    </Col>
                    <Col md={5} xs={5}>
                      <h5>
                        ${this.props.seat.length * this.props.cinema.price},00
                      </h5>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="payment-method">
                <h2>Choose a Payment Method</h2>
                <div className="card-payment-method">
                  <Row>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={google} alt="ic google" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={visa} alt="ic visa" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={gopay} alt="ic gopay" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={paypal} alt="ic paypal" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={dana} alt="ic dana" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={bca} alt="ic bca" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={bri} alt="ic bri" />
                        </div>
                      </label>
                    </Col>
                    <Col md={3} xs={3}>
                      <label>
                        <input type="radio" name="payment" />
                        <div className="icon-payment">
                          <img src={ovo} alt="ic ovo" />
                        </div>
                      </label>
                    </Col>
                  </Row>
                  <h6>
                    <span>or</span>
                  </h6>
                  <div className="pay-cash">
                    Pay via cash.
                    <Link to="#/">See how it work</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="personal-info">
                <h2>Personal Info</h2>
                <div className="card-personal-info">
                  <FormInputText
                    name="fullname"
                    type="text"
                    placeholder="Write your Full Name"
                    defaultValue="Jonas El Rodriguez"
                  >
                    Full Name
                  </FormInputText>
                  <FormInputText
                    name="email"
                    type="email"
                    placeholder="Write your email"
                    defaultValue="jonasrodri123@gmail.com"
                  >
                    Email
                  </FormInputText>
                  <FormInputNumber className="mb-4" defaultValue="81445687121">
                    Phone Number
                  </FormInputNumber>
                  <div className="alert alert-warning" role="alert">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>
                    Fill your data correctly.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={8}>
              <Row>
                <Col className="d-none d-md-block">
                  <Link to="/" className="btn btn-previous py-3 w-100">
                    Previous step
                  </Link>
                </Col>
                <Col>
                  <Button
                    onClick={() =>
                      this.payOrder(
                        this.props.movie.id,
                        this.props.cinema.id,
                        this.props.time.id
                      )
                    }
                    className="btn-primary py-3 w-100"
                  >
                    Pay your order
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(PaymentInfo);

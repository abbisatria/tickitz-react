import React, { Component } from "react";
import { Container, Row, Col, Tabs, Tab, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormInputText from "../../components/Form/FormInputText/FormInputText";
import FormInputNumber from "../../components/Form/FormInputNumber/FormInputNumber";
import FormInputPassword from "../../components/Form/FormInputPassword/FormInputPassword";
import Button from "../../components/Button/Button";

import photo from "../../assets/images/profile_photo.png";
import cineOne12 from "../../assets/images/CineOne21.png";
import ebvId from "../../assets/images/ebv_id.png";
import star from "../../assets/icon/eva_star-fill.png";

import "./ProfileInfo.scss";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile">
        <Container>
          <Row>
            <Col md={4}>
              <div className="card-info">
                <div className="info d-flex justify-content-between">
                  <h6>Info</h6>
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
                <div className="profile-info">
                  <img src={photo} alt="profile" />
                  <h3>Jonas El Rodriguez</h3>
                  <p>Moviegoers</p>
                </div>
                <hr />
                <div className="loyalty-points">
                  <h6>Loyalty Points</h6>
                  <div className="card-loyalty-points">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>Moviegoers</h5>
                      <img src={star} alt="icon star" />
                    </div>
                    <h4>
                      320 <span>points</span>
                    </h4>
                  </div>
                  <h4>180 points become a master</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: 270 }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="tab-bar">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Account Settings">
                    <div className="tab-content">
                      <h3>Detail Information</h3>
                      <hr />
                      <form action="">
                        <Row className="my-4">
                          <Col md={6} xs={12}>
                            <FormInputText
                              type="text"
                              placeholder="Write your First Name"
                              defaultValue="Jonas"
                            >
                              First Name
                            </FormInputText>
                          </Col>
                          <Col md={6} xs={12}>
                            <FormInputText
                              type="text"
                              placeholder="Write your Last Name"
                              defaultValue="El Rodriguez"
                            >
                              Last Name
                            </FormInputText>
                          </Col>
                          <Col md={6} xs={12}>
                            <FormInputText
                              type="email"
                              placeholder="Write your email"
                              defaultValue="jonasrodrigu123@gmail.com"
                            >
                              Last Name
                            </FormInputText>
                          </Col>
                          <Col md={6} xs={12}>
                            <FormInputNumber defaultValue="81445687121">
                              Phone Number
                            </FormInputNumber>
                          </Col>
                        </Row>
                        <h3>Account and Privacy</h3>
                        <hr />
                        <Row>
                          <Col md={6} xs={12} className="my-1">
                            <FormInputPassword placeholder="Write your password">
                              New Password
                            </FormInputPassword>
                          </Col>
                          <Col md={6} xs={12} className="my-1">
                            <FormInputPassword placeholder="Confirm your password">
                              Confirm Password
                            </FormInputPassword>
                          </Col>
                        </Row>
                        <Button className="btn-primary change py-2 px-5">
                          Update Changes
                        </Button>
                      </form>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Order History">
                    <div className="tab-content">
                      <div className="order-history">
                        <Row>
                          <Col md={8} xs={12} className="order-2 order-lg-1">
                            <p>Tuesday, 07 July 2020 - 04:30pm</p>
                            <h6>Spider-Man: Homecoming</h6>
                          </Col>
                          <Col md={4} xs={12} className="order-1 order-lg-2">
                            <img src={cineOne12} alt="cineOne12" />
                          </Col>
                        </Row>
                        <hr />
                        <div className="ticket-order">
                          <Link to="/" className="ticket active py-2">
                            Ticket in active
                          </Link>
                          <Dropdown>
                            <Dropdown.Toggle variant id="dropdown-basic">
                              Show Details
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="order-history">
                        <Row>
                          <Col md={8} xs={12} className="order-2 order-lg-1">
                            <p>Monday, 14 June 2020 - 02:00pm</p>
                            <h6>Avengers: End Game</h6>
                          </Col>
                          <Col md={4} xs={12} className="order-1 order-lg-2">
                            <img src={ebvId} alt="ebv Id" />
                          </Col>
                        </Row>
                        <hr />
                        <div className="ticket-order">
                          <Link to="/" className="ticket py-2">
                            Ticket used
                          </Link>
                          <Dropdown>
                            <Dropdown.Toggle variant id="dropdown-basic">
                              Show Details
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfileInfo;

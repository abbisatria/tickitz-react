import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import imageHero1 from "../../assets/images/img-hero1.png";
import imageHero2 from "../../assets/images/img-hero2.png";
import imageHero3 from "../../assets/images/img-hero3.png";

import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div className="hero-title">
              <p>Nearest Cinema, Newest Movie.</p>
              <h1>Find out now!</h1>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <div className="hero-image">
              <img src={imageHero1} alt="Hero One" />
              <img src={imageHero2} alt="Hero Two" className="mb-4" />
              <img src={imageHero3} alt="Hero Three" className="mb-5" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hero;

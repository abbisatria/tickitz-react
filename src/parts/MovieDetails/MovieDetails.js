import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./MovieDetails.scss";

class MovieDetails extends Component {
  render() {
    return (
      <div className="movie-details mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="card-movies d-flex align-items-center justify-content-center">
                <img src={this.props.image} alt={this.props.title} />
              </div>
            </Col>
            <Col md={8}>
              <div className="title-movies mt-5 mt-lg-0">
                <h1>{this.props.title}</h1>
                <p>{this.props.genre}</p>
              </div>
              <div className="description-movies">
                <Row>
                  <Col xs={6} md={4}>
                    <h6>Release date</h6>
                    <h3>{this.props.release}</h3>
                  </Col>
                  <Col xs={6} md={8}>
                    <h6>Directed</h6>
                    <h3>{this.props.directed}</h3>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={6} md={4}>
                    <h6>Duration</h6>
                    <h3>{this.props.duration}</h3>
                  </Col>
                  <Col xs={6} md={8}>
                    <h6>Casts</h6>
                    <h3>{this.props.casts}</h3>
                  </Col>
                </Row>
                <hr />
                <h2>Synopsis</h2>
                <p>{this.props.synopsis}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieDetails;

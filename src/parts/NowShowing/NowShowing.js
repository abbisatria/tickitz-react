import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import movieList from "../../dummy/movieList";

import "./NowShowing.scss";

class NowShowing extends Component {
  state = {
    nowShowingList: movieList,
  };
  render() {
    return (
      <div className="now-showing">
        <Container>
          <Row>
            <Col>
              <h2>Now Showing</h2>
            </Col>
            <Col className="d-flex justify-content-end">
              <Link to="/" className="view-all">
                view all
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="movies">
            {this.state.nowShowingList
              .filter((movie) => movie.status === "realese")
              .map((value, index) => {
                return (
                  <div className="card-movies" key={String(index)}>
                    <img src={value.image} alt={value.title} />
                    <div className="title-movies">
                      <h1>{value.title}</h1>
                      <p>{value.genre}</p>
                    </div>
                    <div className="button-movies">
                      <Link to={`/details/${value.id}`} className="btn-details">
                        Details
                      </Link>
                      <br />
                      <br />
                      <Button className="btn-primary book-now">Book-now</Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </div>
    );
  }
}

export default NowShowing;

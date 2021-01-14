import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import CardMoviesUpcoming from "../../components/CardMoviesUpcoming/CardMoviesUpcoming";

import "./ComingMovies.scss";

import movieList from "../../dummy/movieList";

class ComingMovies extends Component {
  state = {
    month: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
    ],
    movieUpComing: movieList,
  };
  render() {
    return (
      <div className="upcoming-movies">
        <Container>
          <Row>
            <Col>
              <h2>Upcoming Movies</h2>
            </Col>
            <Col className="d-flex justify-content-end">
              <Link to="/" className="view-all">
                view all
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="month-movies">
            {this.state.month.map((value, index) => {
              return (
                <Button className="outline-primary" key={String(index)}>
                  {value}
                </Button>
              );
            })}
          </div>
          <div className="movies-upcoming">
            {this.state.movieUpComing
              .filter((movie) => movie.status === "upcoming")
              .map((value, index) => {
                return <CardMoviesUpcoming data={value} key={String(index)} />;
              })}
          </div>
        </Container>
      </div>
    );
  }
}

export default ComingMovies;

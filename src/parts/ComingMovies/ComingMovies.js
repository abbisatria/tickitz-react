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
    movieUpComing: movieList.filter((movie) => movie.status === "upcoming"),
  };

  searhMovie = (month) => {
    this.setState({
      movieUpComing: this.state.movieUpComing.filter(
        (value) => value.release.indexOf(month) !== -1
      ),
    });
  };

  viewAllMovie = () => {
    this.setState({
      movieUpComing: movieList.filter((movie) => movie.status === "upcoming"),
    });
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
              <Link
                to=""
                className="view-all"
                onClick={() => this.viewAllMovie()}
              >
                view all
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="month-movies">
            {this.state.month.map((value, index) => {
              return (
                <Button
                  className="outline-primary"
                  key={String(index)}
                  onClick={() => this.searhMovie(value)}
                >
                  {value}
                </Button>
              );
            })}
          </div>
          <div className="movies-upcoming">
            {this.state.movieUpComing.map((value, index) => {
              return <CardMoviesUpcoming data={value} key={String(index)} />;
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default ComingMovies;

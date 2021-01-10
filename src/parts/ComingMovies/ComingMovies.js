import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./ComingMovies.scss";

import upComing1 from "../../assets/images/up-coming1.png";
import upComing2 from "../../assets/images/up-coming2.png";
import upComing3 from "../../assets/images/up-coming3.png";

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
    movieUpComing: [
      {
        id: 1,
        title: "Black Widow",
        genre: "Acion, Adventure, Sci-FI",
        image: upComing1,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 2,
        title: "The Witches",
        genre: "Adventure, Comedy, Family",
        image: upComing2,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 3,
        title: "Tenet",
        genre: "Acion, Sci-FI",
        image: upComing3,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 4,
        title: "Black Widow",
        genre: "Acion, Adventure, Sci-FI",
        image: upComing1,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 5,
        title: "The Witches",
        genre: "Adventure, Comedy, Family",
        image: upComing2,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 6,
        title: "Tenet",
        genre: "Acion, Sci-FI",
        image: upComing3,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
    ],
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
            {this.state.movieUpComing.map((value, index) => {
              return (
                <div className="card-movies-upcoming" key={String(value.id)}>
                  <img src={value.image} alt="" />
                  <h1>{value.title}</h1>
                  <p>{value.genre}</p>
                  <Link
                    to={{
                      pathname: `/details/${value.id}`,
                      state: {
                        data: this.state.movieUpComing.filter(
                          (data) => data.id === value.id
                        ),
                      },
                    }}
                    className="btn-details"
                  >
                    Details
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default ComingMovies;

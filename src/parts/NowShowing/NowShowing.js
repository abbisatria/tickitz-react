import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import nowShowing1 from "../../assets/images/now-showing1.png";
import nowShowing2 from "../../assets/images/now-showing2.png";
import nowShowing3 from "../../assets/images/now-showing3.png";

import "./NowShowing.scss";

class NowShowing extends Component {
  state = {
    nowShowingList: [
      {
        id: 1,
        title: "Spider-Man: Homecoming",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing1,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 2,
        title: "Lion King",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing2,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 3,
        title: "John Wick 3",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing3,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 4,
        title: "Spider-Man: Homecoming",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing1,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 5,
        title: "Lion King",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing2,
        release: "June 28, 2017",
        directed: "Jon Watss",
        duration: "2 hours 13 minutes",
        casts: "Tom Holland, Michael Keaton, Robert Downey Jr",
        synopsis:
          "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
      },
      {
        id: 6,
        title: "John Wick 3",
        genre: "Acion, Adventure, Sci-FI",
        image: nowShowing3,
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
            {this.state.nowShowingList.map((value, index) => {
              return (
                <div className="card-movies" key={String(index)}>
                  <img src={value.image} alt={value.title} />
                  <div className="title-movies">
                    <h1>{value.title}</h1>
                    <p>{value.genre}</p>
                  </div>
                  <div className="button-movies">
                    <Link
                      to={{
                        pathname: `/details/${value.id}`,
                        state: {
                          data: this.state.nowShowingList.filter(
                            (data) => data.id === value.id
                          ),
                        },
                      }}
                      className="btn-details"
                    >
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

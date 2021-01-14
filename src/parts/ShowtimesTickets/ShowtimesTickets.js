import React, { Component } from "react";
import { Container, Row, Form } from "react-bootstrap";
import FormInputDate from "../../components/Form/FormInputDate/FormInputDate";
import FormInputLocation from "../../components/Form/FormInputLocation/FormInputLocation";
import { Link } from "react-router-dom";
import CardShowTimes from "../../components/CardShowTimes/CardShowTimes";

import "./ShowtimesTickets.scss";

import cinemaList from "../../dummy/cinemaList";

class ShowtimesTickets extends Component {
  state = {
    showtimesTickets: cinemaList,
    date: "",
  };
  changeTime = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="showtimes-tickets">
        <Container>
          <h1>Showtimes and Tickets</h1>
          <Form className="form-showtimes my-5">
            <FormInputDate
              name="date"
              onChange={(event) => this.changeTime(event)}
            />
            <FormInputLocation />
          </Form>
          <Row>
            {this.state.showtimesTickets.map((value, index) => {
              return (
                <CardShowTimes
                  data={value}
                  date={this.state.date}
                  movieId={this.props.movieId}
                  key={String(index)}
                />
              );
            })}
          </Row>
          <h5>
            <Link to="/" className="view-more">
              View More
            </Link>
          </h5>
        </Container>
      </div>
    );
  }
}

export default ShowtimesTickets;

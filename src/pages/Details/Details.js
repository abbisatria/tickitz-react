import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import MovieDetails from "../../parts/MovieDetails/MovieDetails";
import ShowtimesTickets from "../../parts/ShowtimesTickets/ShowtimesTickets";

class Details extends Component {
  state = {
    details: [],
  };
  componentDidMount() {
    const detail = this.props.location.state.data;
    this.setState({ details: detail });
  }
  render() {
    return (
      <>
        <Header />
        {this.state.details.map((value, index) => {
          return (
            <MovieDetails
              key={String(index)}
              title={value.title}
              genre={value.genre}
              image={value.image}
              release={value.release}
              directed={value.directed}
              duration={value.duration}
              casts={value.casts}
              synopsis={value.synopsis}
            />
          );
        })}
        <ShowtimesTickets />
        <Footer />
      </>
    );
  }
}

export default Details;

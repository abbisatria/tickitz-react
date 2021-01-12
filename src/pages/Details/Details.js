import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import MovieDetails from "../../parts/MovieDetails/MovieDetails";
import ShowtimesTickets from "../../parts/ShowtimesTickets/ShowtimesTickets";

import movieList from "../../dummy/movieList";

class Details extends Component {
  state = {
    details: movieList.filter(
      (item) => item.id === Number(this.props.match.params.id)
    ),
  };
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
        <ShowtimesTickets movieId={this.state.details[0].id} />
        <Footer />
      </>
    );
  }
}

export default Details;

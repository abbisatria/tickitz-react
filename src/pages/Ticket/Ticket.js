import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import ProofOfPayment from "../../parts/ProofOfPayment/ProofOfPayment";

import movieList from "../../dummy/movieList";
import cinemaList from "../../dummy/cinemaList";

class Ticket extends Component {
  state = {
    movie: movieList.filter(
      (item) => item.id === Number(this.props.match.params.movie_id)
    ),
    cinemas: cinemaList.filter(
      (item) => item.id === Number(this.props.match.params.cinema_id)
    ),
    seat: this.props.location.state.data,
  };
  showtime = this.state.cinemas[0].showtimes.filter(
    (item) => item.id === Number(this.props.match.params.showtime_id)
  );
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <>
        <Header />
        <ProofOfPayment
          data={this.state.movie[0]}
          value={this.state.cinemas[0]}
          time={this.showtime[0]}
          seat={this.state.seat}
        />
        <Footer />
      </>
    );
  }
}

export default Ticket;

import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";

import movieList from "../../dummy/movieList";
import cinemaList from "../../dummy/cinemaList";

import OrderMovie from "../../parts/OrderMovie/OrderMovie";

class Order extends Component {
  state = {
    movie: movieList.filter(
      (item) => item.id === Number(this.props.match.params.movie_id)
    ),
    cinema: cinemaList.filter(
      (item) => item.id === Number(this.props.match.params.cinema_id)
    ),
    date: this.props.location.state.data,
  };
  showtime = this.state.cinema[0].showtimes.filter(
    (item) => item.id === Number(this.props.match.params.showtime_id)
  );
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <>
        <Header />
        <OrderMovie
          movie={this.state.movie[0]}
          cinema={this.state.cinema[0]}
          time={this.showtime[0]}
          date={this.state.date}
        />
        <Footer />
      </>
    );
  }
}

export default Order;

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
    cinemas: cinemaList.filter(
      (item) => item.id === Number(this.props.match.params.cinema_id)
    ),
  };
  showtime = this.state.cinemas[0].showtimes.filter(
    (item) => item.id === Number(this.props.match.params.showtime_id)
  );
  // componentDidMount() {
  //   console.log(
  //     cinemaList.filter(
  //       (item) =>
  //         item.id === Number(this.props.match.params.cinema_id) &&
  //         item.showtimes.filter(
  //           (show) => show.id === Number(this.props.match.params.showtime_id)
  //         )
  //     )
  //   );
  // }
  render() {
    return (
      <>
        <Header />
        {/* {console.log(
          this.state.cinemas[0].showtimes.filter(
            (item) => item.id === Number(this.props.match.params.showtime_id)
          )
        )} */}
        <OrderMovie
          data={this.state.movie[0]}
          value={this.state.cinemas[0]}
          time={this.showtime[0]}
        />
        <Footer />
      </>
    );
  }
}

export default Order;

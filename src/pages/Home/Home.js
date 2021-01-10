import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Hero from "../../parts/Hero/Hero";
import NowShowing from "../../parts/NowShowing/NowShowing";
import ComingMovies from "../../parts/ComingMovies/ComingMovies";
import JoinMember from "../../parts/JoinMember/JoinMember";
import Footer from "../../parts/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <NowShowing />
        <ComingMovies />
        <JoinMember />
        <Footer />
      </>
    );
  }
}

export default Home;

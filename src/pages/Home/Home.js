import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Hero from "../../parts/Hero/Hero";
import NowShowing from "../../parts/NowShowing/NowShowing";
import ComingMovies from "../../parts/ComingMovies/ComingMovies";
import JoinMember from "../../parts/JoinMember/JoinMember";
import Footer from "../../parts/Footer/Footer";

export default class Home extends Component {
  state = {
    user: "",
  };
  componentDidMount() {
    let data = localStorage.getItem("myData");
    data = JSON.parse(data);
    this.setState({ user: data.email });
  }
  render() {
    return (
      <>
        <Header user={this.state.user} />
        <Hero />
        <NowShowing />
        <ComingMovies />
        <JoinMember />
        <Footer />
      </>
    );
  }
}

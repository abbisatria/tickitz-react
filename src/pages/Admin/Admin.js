import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";
import MovieDescription from "../../parts/MovieDescription/MovieDescription";

class Admin extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieDescription />
        <Footer />
      </>
    );
  }
}

export default Admin;

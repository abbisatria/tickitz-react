import React, { Component } from "react";
import Header from "../../parts/Header/Header";
import Footer from "../../parts/Footer/Footer";

import ProfileInfo from "../../parts/ProfileInfo/ProfileInfo";

class Profile extends Component {
  render() {
    return (
      <>
        <Header />
        <ProfileInfo />
        <Footer />
      </>
    );
  }
}

export default Profile;

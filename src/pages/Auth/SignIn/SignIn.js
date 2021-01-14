import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import FormInputText from "../../../components/Form/FormInputText/FormInputText";
import FormInputPassword from "../../../components/Form/FormInputPassword/FormInputPassword";

import logo from "../../../assets/images/logo-tickitz.png";
import icGoogle from "../../../assets/icon/ic-google.png";
import icFacebook from "../../../assets/icon/ic-facebook.png";

import "../auth.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  submitData = (event) => {
    event.preventDefault();
    if (
      this.state.email === this.props.location.state.data.email &&
      this.state.password === this.props.location.state.data.password
    ) {
      this.setState({ email: this.email } && { password: this.password });
      localStorage.setItem("myData", JSON.stringify(this.state));
      this.props.history.push("/?success=true", { data: this.state });
    } else {
      this.props.history.push("/sign-in?success=false", {
        data: this.props.location.state.data,
      });
    }
  };

  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={7} className="d-none d-md-block authentication-image">
            <div className="d-flex justify-content-center align-items-center flex-column h-100">
              <img src={logo} alt="Logo Tickitz" style={{ width: 500 }} />
              <h2>wait, watch, wow!</h2>
            </div>
          </Col>
          <Col md={5} className="authentication-form">
            <div className="authentication-form-title">
              <h1>Sign In</h1>
              <p>
                Sign in with your data that you entered during your registration
              </p>
            </div>
            <Form onSubmit={this.submitData}>
              <FormInputText
                name="email"
                onChange={(event) => this.changeText(event)}
                type="email"
                placeholder="Write your email"
              >
                Email
              </FormInputText>
              <FormInputPassword
                name="password"
                onChange={(event) => this.changeText(event)}
                placeholder="Write your password"
              >
                Password
              </FormInputPassword>

              <Button className="btn-primary w-100 py-3 mb-4" type="submit">
                Sign In
              </Button>
            </Form>
            <div className="text-center link mb-4">
              Forgot your password?
              <Link to="/forgot-password"> Reset now</Link>
            </div>
            <div className="or-line text-center">
              <span>Or</span>
            </div>
            <Row>
              <Col className="d-flex justify-content-between mt-4">
                <div className="link-external py-3">
                  <a href="https://www.google.com/" rel="_blank">
                    <img src={icGoogle} alt="icon google" />
                    <span className="d-md-block d-sm-none">Google</span>
                  </a>
                </div>
                <div className="link-external py-3">
                  <a href="https://www.facebook.com/" rel="_blank">
                    <img src={icFacebook} alt="icon facebook" />
                    <span>Facebook</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../../components/Button/Button";
import FormInputText from "../../../components/Form/FormInputText/FormInputText";

import logo from "../../../assets/images/logo-tickitz.png";

import "../auth.scss";

class ForgotPassword extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={7} className="d-none d-md-block authentication-image">
            <div>
              <img className="mb-5" src={logo} alt="Logo Tickitz" />
              <h1>Lets build your account</h1>
              <p>
                To be a loyal moviegoer and access all of features, your details
                are required
              </p>
              <div className="custom-progress">
                <ul>
                  <li>
                    <span className="active">1</span>
                    <div className="progres">Fill your additional details</div>
                  </li>
                  <li>
                    <span>2</span>
                    <div className="progres">Active your account</div>
                  </li>
                  <li>
                    <span>3</span>
                    <div className="progres">Enter your new password</div>
                  </li>
                  <li>
                    <span>4</span>
                    <div className="progres">Done</div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={5} className="authentication-form">
            <div className="authentication-form-title">
              <h1>Fill your complete email</h1>
              <p>we'll send a link to your email shortly</p>
            </div>
            <Form>
              <FormInputText
                name="email"
                type="email"
                placeholder="Write your email"
              >
                Email
              </FormInputText>

              <Button className="btn-primary w-100 py-3 mb-4" type="submit">
                Activate now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ForgotPassword;

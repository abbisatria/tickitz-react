import React, { Component } from "react";
import { Form } from "react-bootstrap";
import location from "../../../assets/icon/ic_location.png";

import "./FormInputLocation.scss";

class FormInputLocation extends Component {
  render() {
    return (
      <Form.Group>
        <div className="form-outline">
          <img src={location} alt="icon-location" />
          <Form.Control as="select" custom className="form-select">
            <option>{this.props.children}</option>
          </Form.Control>
        </div>
      </Form.Group>
    );
  }
}

export default FormInputLocation;

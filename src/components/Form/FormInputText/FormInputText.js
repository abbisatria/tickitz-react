import React, { Component } from "react";
import { Form } from "react-bootstrap";

import "./FormInputText.scss";

class FormInputText extends Component {
  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.children}</Form.Label>
        <Form.Control
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}
          required
        />
      </Form.Group>
    );
  }
}

export default FormInputText;

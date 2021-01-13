import React, { Component } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

class FormInputNumber extends Component {
  render() {
    return (
      <>
        <Form.Label htmlFor="inlineFormInputGroup">
          {this.props.children}
        </Form.Label>
        <InputGroup className={this.props.className}>
          <InputGroup.Prepend>
            <InputGroup.Text>+62</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroup"
            type="number"
            defaultValue={this.props.defaultValue}
          />
        </InputGroup>
      </>
    );
  }
}

export default FormInputNumber;

import React, { Component } from "react";
import { Form } from "react-bootstrap";
import calender from "../../../assets/icon/ic_calendar.png";

import "./FormInputDate.scss";

class FormInputDate extends Component {
  render() {
    return (
      <Form.Group>
        <div className="form-outline py-2">
          <img src={calender} alt="icon-calender" />
          <Form.Control
            name={this.props.name}
            type="date"
            className="unstyled"
          />
        </div>
      </Form.Group>
    );
  }
}

export default FormInputDate;

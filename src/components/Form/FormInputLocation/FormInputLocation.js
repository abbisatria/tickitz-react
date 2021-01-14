import React from "react";
import { Form } from "react-bootstrap";
import location from "../../../assets/icon/ic_location.png";

import "./FormInputLocation.scss";

export default function FormInputLocation() {
  return (
    <Form.Group>
      <div className="form-outline-location">
        <img src={location} alt="icon-location" />
        <Form.Control as="select" custom className="form-select">
          <option>Purwokerto</option>
          <option>Jakarta</option>
          <option>Bandung</option>
        </Form.Control>
      </div>
    </Form.Group>
  );
}

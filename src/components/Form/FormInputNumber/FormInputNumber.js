import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

export default function FormInputNumber(props) {
  const { children, className, defaultValue } = props;
  return (
    <>
      <Form.Label>{children}</Form.Label>
      <InputGroup className={className}>
        <InputGroup.Prepend>
          <InputGroup.Text>+62</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="number" defaultValue={defaultValue} />
      </InputGroup>
    </>
  );
}

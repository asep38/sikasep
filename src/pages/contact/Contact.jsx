import React from "react";

import "./contact.css";

import { Button, Container, Form, InputGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container className="py-5 ">
        <h1 className="text-center">Contact</h1>
        <div className="row align-items-center justify-content-center ">
          {/* <div className="col-md-6 py-4 contact-text">
            <h6>Address</h6>
            <h6>Phone</h6>
            <h6>Email</h6>
          </div> */}

          <div className="col-md-6 py-4 contact-form">
            <InputGroup className="mb-3 py-1 ">
              <Form.Control
                className="form"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3 py-1 ">
              <Form.Control
                className="form"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="pb-2">
              <Form.Control
                className="form"
                as="textarea"
                placeholder="Message"
                aria-label="With textarea"
              />
            </InputGroup>
            <Button>Submit</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;

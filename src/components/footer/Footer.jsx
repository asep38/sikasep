import React from "react";

import "./footer.css";

import { Button, Form, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="row ">
          <div className="col-md-6">
            <h2>Subscribe To Newsletter</h2>
          </div>
          <div className="col-md-6">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>

      <div className="footer_bottom py-4">
        <div className="row">
          <div className="col-md-6">
            <h1>Sikasep</h1>
            {/* <p>dari asep, oleh asep , untuk asep</p> */}
          </div>

          <div className="col-md-3">
            <h1>Company</h1>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h1>Social</h1>
            <ul>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright pt-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <small>Powered By &copy; Asep Z ( 2023 )</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

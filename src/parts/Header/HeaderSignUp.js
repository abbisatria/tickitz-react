import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

import logo from "../../assets/images/tickitz-logo.png";

class HeaderSignUp extends Component {
  render() {
    return (
      <Container>
        <div className="d-none d-md-block">
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="Logo Tickitz" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-between"
            >
              <Nav>
                <NavLink to="/" className="nav-link mr-4 ml-4">
                  Movies
                </NavLink>
                <NavLink to="/" className="nav-link mr-4">
                  Cinemas
                </NavLink>
                <NavLink to="/" className="nav-link">
                  Buy Ticket
                </NavLink>
              </Nav>
              <Nav className="d-flex align-items-center">
                <NavDropdown title="Location" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">ID</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">ENG</NavDropdown.Item>
                </NavDropdown>
                <Form className="search-box ml-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-txt"
                  />
                  <Button className="search-btn">
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>
                <Link to="/sign-up" className="sign-up-button py-2 px-4 ml-4">
                  Sign Up
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="d-sm-block d-md-none">
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="Logo Tickitz" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Form className="d-flex form-search my-4">
                  <Button type="submit">
                    <i className="fa fa-search"></i>
                  </Button>
                  <Form.Control type="search" placeholder="Search..." />
                </Form>
                <NavDropdown
                  title="Location"
                  id="basic-nav-dropdown"
                  className="nav-link text-center"
                >
                  <NavDropdown.Item href="#action/3.2">ID</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">ENG</NavDropdown.Item>
                </NavDropdown>
                <hr />
                <NavLink to="/" className="nav-link text-center">
                  Movies
                </NavLink>
                <hr />
                <NavLink to="/" className="nav-link text-center">
                  Cinemas
                </NavLink>
                <hr />
                <NavLink to="/" className="nav-link text-center">
                  Buy Ticket
                </NavLink>
                <hr />
                <NavLink to="/" className="nav-link text-center mt-4">
                  &copy; 2020 Tickitz • All Rights Reserved.
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default HeaderSignUp;

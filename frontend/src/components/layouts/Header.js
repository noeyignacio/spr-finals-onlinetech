import React, { Component } from "react";

// React Bootstrap
import { Nav, Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Book Collection</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">List of My Books</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Nav.Link>Sign Up</Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

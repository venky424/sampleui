import React from 'react';
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";

class AppHeader extends React.Component{
  render() {
      return(
          <div>
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand>SampleUI</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav variant="pills" className="AppNav">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#Categories">Categories</Nav.Link>
                      <Nav.Link href="#Currencies">Currencies</Nav.Link>
                      <Nav.Link href="Countries">Countries</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          </div>
      );
  }
}

export default AppHeader;
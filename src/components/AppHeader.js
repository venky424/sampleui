import React from 'react';
import {Navbar,Nav,Button} from "react-bootstrap"
import sampleuibrand from "../images/sampleuibrand.ico"

class AppHeader extends React.Component{
  render() {
      return(
          <div>
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand>
                  <img
                      alt=""
                      src={sampleuibrand}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                  />{' '}
                  SampleUI</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav variant="pills" className="AppNav">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/categories">Categories</Nav.Link>
                      <Nav.Link href="/currencies">Currencies</Nav.Link>
                      <Nav.Link href="/countries">Countries</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <Button variant="info">Login/Signup</Button>
          </Navbar>
          </div>
      );
  }
}

export default AppHeader;
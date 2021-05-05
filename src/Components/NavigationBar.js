import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
      <Navbar.Brand href="/#home"><span className="brand">Hima Shankaram</span><div className="text-center">Charitable Trust</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-3">
          <Nav.Link href="/#home">Home</Nav.Link>
          <Nav.Link href="/#objectives">Objective</Nav.Link>
          <Nav.Link href="/#gallery">Gallery</Nav.Link>
          <Nav.Link href="#vision">Vision</Nav.Link>
          <Nav.Link href="#trustees">Trustees</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </ Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar

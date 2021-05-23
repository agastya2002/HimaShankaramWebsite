import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavigationBar.css';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top">
      <Navbar.Brand href="/#home"><span className="brand">Hima Shankaram</span><div className="text-center">Charitable Trust</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-3">
          <Nav.Link><NavLink style={{textDecoration: 'none', color: "gray"}} activeStyle={{ fontWeight: "bold", color: "black" }} to="/home">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink style={{textDecoration: 'none', color: "gray"}} activeStyle={{ fontWeight: "bold", color: "black" }} to="/gallery">Gallery</NavLink></Nav.Link>
          <Nav.Link><NavLink style={{textDecoration: 'none', color: "gray"}} activeStyle={{ fontWeight: "bold", color: "black" }} to="/vision">Vision</NavLink></Nav.Link>
          <Nav.Link><NavLink style={{textDecoration: 'none', color: "gray"}} activeStyle={{ fontWeight: "bold", color: "black" }} to="/trustees">Trustees</NavLink></Nav.Link>
          <Nav.Link><NavLink style={{textDecoration: 'none', color: "gray"}} activeStyle={{ fontWeight: "bold", color: "black" }} to="/contact">Contact</NavLink></Nav.Link>
        </Nav>
      </ Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavigationBar

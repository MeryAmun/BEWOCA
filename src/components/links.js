import React from 'react';
import { BrowserRouter,NavLink, Route, Link } from 'react-router-dom'
import {  Nav,Navbar,Button,Jumbotron, NavDropdown,Carousel,Form,FormControl, Card,Col, Container } from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <div>
 <Navbar className="d-flex justify-content-between">
      <Navbar.Brand className="" href="/"> 
      <img
      className="log d-block w-20"
      src="/images/d7.jpg"
      alt="First slide"
    />
    </Navbar.Brand>
    <Navbar.Brand className="text-info">
    <Link to="#">
            <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
        </Link>
    </Navbar.Brand>
      </Navbar>
        <Nav  className="nav justify-content-start  font-weight-bold bg-dark flex-column-sm">
  <Nav.Item>
    <Nav.Link href="/">HOME</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">ABOUT US</Nav.Link>
  </Nav.Item>
  <NavDropdown title="WHAT WE DO" id="nav-dropdown">
        <NavDropdown.Item href="4.1">EDUCATION</NavDropdown.Item>
        <NavDropdown.Item href="4.1">EMERGENCIES</NavDropdown.Item>
        <NavDropdown.Item href="4.2">SKILLS BUILDING AND WORK</NavDropdown.Item>
        <NavDropdown.Item href="4.3">ENDING VIOLENCE</NavDropdown.Item>
        <NavDropdown.Item href="4.3">YOUTH ACTIVISM</NavDropdown.Item>
        <NavDropdown.Item href="link-1">LEGAL COUNSEL</NavDropdown.Item>
        <NavDropdown.Item href="link-1">SEXUAL HEALTH AND RIGHTS</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown  fluid title="WHAT YOU CAN DO" id="nav-dropdown">
        <NavDropdown.Item href="link-1">SHARE YOUR STORY</NavDropdown.Item>
        <NavDropdown.Item href="link-1">MAKE A DONATION</NavDropdown.Item>
        <NavDropdown.Item href="link-1">VOLUNTEER</NavDropdown.Item>
        <NavDropdown.Item href="link-1">SEXUAL HEALTH AND RIGHTS</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
    <Nav.Link href="link-1">PATNERSHIPS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home" >CONTACT US</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Form inline className="search">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form></Nav.Item>
</Nav>
        </div>
     );
}
 
export default Navigation;
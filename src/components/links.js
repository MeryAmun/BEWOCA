import React from 'react';
import {Link } from 'react-router-dom'
import {  Nav,Navbar, NavDropdown,Form,FormControl } from 'react-bootstrap';

const Navigation = () => {
    return ( 
        <div>
 <Navbar className="d-flex justify-content-between">
      <Navbar.Brand className="" href="/"> 
      <img
      className="logo d-block w-20"
      src="/images/d7.jpg"
      alt="First slide"
    />
    </Navbar.Brand>
    <Navbar.Brand className="text-info">
    <Link to="/contact">
            <i className="ico fa fa-globe fa-2x" aria-hidden="true"></i>
        </Link>
    </Navbar.Brand>
      </Navbar>
        <Nav className="nav justify-content-start  font-weight-bold bg-dark">
  <Nav.Item>
    <Nav.Link href="/">HOME</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">ABOUT US</Nav.Link>
  </Nav.Item>
  <NavDropdown className="" title="WHAT WE DO" id="nav-dropdown">
        <NavDropdown.Item href="/emergency">EMERGENCIES</NavDropdown.Item>
        <NavDropdown.Item href="education">EDUCATION, SKILLS BUILDING AND WORK</NavDropdown.Item>
        <NavDropdown.Item href="/violence">GENDER BASED VIOLENCE</NavDropdown.Item>
       <NavDropdown.Item href="/rights">SEXUAL HEALTH AND RIGHTS</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
    <Nav.Link href="/donate">DONATE</Nav.Link>
  </Nav.Item>
      <Nav.Item>
    <Nav.Link href="/partnerships">PATNERSHIPS</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contact">CONTACT US</Nav.Link>
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
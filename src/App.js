import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {  Nav,Navbar,Button,Jumbotron,Carousel, Container } from 'react-bootstrap';
require('bootstrap');



function App() {
  return (
    <BrowserRouter>
      <Container fluid>
      <Navbar  className="justify-content-end" bg="dark" variant="dark">
      <Navbar.Brand className="d-inline-block align-top" href="#home">BEWOCA</Navbar.Brand>
        <Nav activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Activities</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/home" >Contact</Nav.Link>
  </Nav.Item>
</Nav>
 </Navbar>
<Carousel bg="dark">
  <Carousel.Item>
  <Carousel.Caption>
 
      <h1 className="text-center mt-4 mb-4">Better World Community and Advocacy Organization</h1>
    
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
      <h1 className="Display-1">Better World Community and Advocacy Organization</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d2.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
      <h1>Better World Community and Advocacy Organization</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<Jumbotron fluid>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="secondary">Learn more</Button>
  </p>
</Jumbotron>

      </Container>
    </BrowserRouter>
  );
}

export default App;

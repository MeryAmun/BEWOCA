import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {  Nav,Navbar,Button,Jumbotron, NavDropdown,Carousel,Card,Col, Container } from 'react-bootstrap';
require('bootstrap');



function App() {
  return (
    <BrowserRouter>
      <Navbar  className="justify-content-start h-50 clearfix" bg="transparent" variant="dark">
      <Navbar.Brand className="float-left" href="#home"> <img
      className="d-block w-20"
      src="/images/d7.jpg"
      alt="First slide"
    /></Navbar.Brand>
      </Navbar>
        <Nav activeKey="/home" className="justify-content-end h-50 clearfix font-weight-bold bg-dark">
  <Nav.Item>
    <Nav.Link href="/home">HOME</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="link-1">ABOUT US</Nav.Link>
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
    <Nav.Link href="/home" >CONTACT US</Nav.Link>
  </Nav.Item>
</Nav>
<Jumbotron className="font-weight-bold bg-dark sm-display-4 lg-display-3">
<h1>HELP AN INTERNALLY DISPLACED PERSON FLEEING THE WAR IN ENGLISH CAMEROON </h1>
</Jumbotron>
 <Container className="fluid d-flex justify-content-between">
<Carousel className="d-block w-100">
  <Carousel.Item>
  <Carousel.Caption>
      <h1 className="font-weight-normal  sm-display-4 lg-display-1">Welcome to Better World Community And Advocacy Organization</h1>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
  
      <h1 className="font-weight-normal text-dark  sm-display-4 lg-display-1">A little Makes a difference</h1>
    
    </Carousel.Caption>
    <img 
      className="d-block w-100"
      src="/images/d2.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
     <h3 className=" text-center font-weight-bold text-dark   sm-display-4  lg-display-1"> Take action Now!! Volunteer or donate</h3>
     
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<div><Card style={{ width: '30rem', margin: "1rem" }}>
<div className="d-flex flex-wrap">
<img
      className="d-block w-50"
      src="/images/d3.jpg"
      alt="Third slide"
    />
     <img
      className="d-block w-50"
      src="/images/d3.jpg"
      alt="Third slide"
    />
    
     <img
      className="d-block w-50"
      src="/images/d3.jpg"
      alt="Third slide"
    />
     <img
      className="d-block w-50"
      src="/images/d3.jpg"
      alt="Third slide"
    />
    </div>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Take action, spaonsor an Internally displaced person to learn a trade, donate to our project aimed at training women and girls how to make sandals and bags using beads.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '30rem', margin: "1rem" }}>

     <img
      className="d-block w-50"
      src="/images/d3.jpg"
      alt="Third slide"
    />

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Women and children are the ones who bare the greates brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>


</Container>
<p className="para">
    Welcome to Better World Community And Advocacy Organization (BEWOCA) official website.Here we belief that a little effort can alot of difference in the life of an individual.We are A youn NGO based in Bamenda, a city in the English Speaking part of Cameroon. 
  </p>
  <p>
    <Button variant="light"><Link to href="/work">Learn more</Link></Button>
  </p>


     <div className="footer">
       <h4>BEWOCA &copy;2020</h4>
     </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter,NavLink, Route, Link } from 'react-router-dom'
import {  Nav,Navbar,Button,Jumbotron, NavDropdown,Carousel,Form,FormControl, Card,Col, Container } from 'react-bootstrap';





const Home = () => {
    return ( 
        <div>
 <Jumbotron fluid className=" display-3 bg-dark">  
                <Nav.Item>
    <Nav.Link href="link-1"> HELP SOMEONE INTERNALLY DISPLACED BY THE WAR IN ENGLISH CAMEROON</Nav.Link>
  </Nav.Item>
            </Jumbotron>
           
<Container className="fluid display-5-sm">
 <Container className="fluid d-flex">
<Carousel className="d-block w-100">
  <Carousel.Item>
  <Carousel.Caption>
      <h1 className=" title font-weight-normal">Welcome to Better World Community And Advocacy Organization</h1>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <Carousel.Caption>
   <h1 className="title font-weight-normal text-dark ">A little Makes a difference</h1>
    </Carousel.Caption>
    <img 
      className="d-block w-100"
      src="/images/d2.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
 <Carousel.Item>
  <Carousel.Caption>
     <h3 className="title text-center font-weight-bold text-dark lg display-5"> Take action Now!! Volunteer or donate</h3>
     
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/d3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>

<main className="">
<section className="d-flex">
<div className="para">
    <p>Welcome to Better World Community And Advocacy Organization (BEWOCA) official website.Here we belief that a little effort can make alot of difference in the life of an individual.We are A young NGO based in Bamenda, a city in the English Speaking part of Cameroon. 
    </p>
    <Button variant="light"><NavLink to="/about">Learn more</NavLink></Button>

    <div className="caro">
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/images/a6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="/images/a5.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="text-seconadry dispaly-3">First Batch of Trainees in the Sandals making craft</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/a4.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Cross-section of Products.</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  </div>
  
   

  <aside className="float-right">
<Card  className="border border-white" style={{ width: '30rem', margin: "1rem" }}>
<div className="hov d-flex flex-wrap">
<img
      className="d-block w-50"
      src="/images/a2.jpg"
      alt="Third slide"
    />
     <img
      className="d-block w-50"
      src="/images/a2.jpg"
      alt="Third slide"
    />
    
     <img
      className="d-block w-50"
      src="/images/a2.jpg"
      alt="Third slide"
    />
     <img
      className="d-block w-50"
      src="/images/a2.jpg"
      alt="Third slide"
    />
    </div>
  <Card.Body>
    <Card.Title className="display-5">Take action</Card.Title>
    <Card.Text>
     Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card  className="border border-white" style={{ width: '30rem', margin: "1rem" }}>

     <img
      className="hov d-block w-100"
      src="/images/a1.jpg"
      alt="Third slide"
    />

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</aside>
</section>

</main>
</Container>
        </div>
     );
}
 
export default Home;
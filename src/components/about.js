import React from 'react';
import { BrowserRouter,NavLink, Route, Link } from 'react-router-dom'
import {  Image, Nav,Navbar,Button,Jumbotron, NavDropdown,Carousel,Form,FormControl, Card,Col, Container } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about">
       
            <Jumbotron fluid className=" display-3 bg-dark">  
                <Nav.Item>
    <Nav.Link href="link-1"> WHO WE ARE</Nav.Link>
  </Nav.Item>
            </Jumbotron>
           <Container fluid>
           <img src="images/d3.jpg" className="img-fluid w-100" />
            <main className="">
<section className="d-flex">
<div className="para">
<p className="display-6">Better World Community and Advocacy Organization is a community based organization out to identify and prevent all forms of abuse on men, women and children; irrespective of who they are. We are committed to make sure that Human rights are communicated and respected; that unwanted pregnancy is prevented through education campaigns, that teenage girls are given a chance to better their lives after giving birth through vocational training. We also want to a e ensuret school dropouts and street kids can better their lives through education and carry out rehabilitation programs to reduce the rate of GBV ( Gender Based Violence) by engaging men and women in constructive dialogue, accountability and providing the information, tools, emotional and psychosocial  support needed to make the home, communities, society, nation and the world a better place for all.
<br/>
<br/>
We are funded by members and people like you. We are independent of any political ideology, economic interest or religious ideology. No individual or government is beyond scrutiny. No situation is beyond hope.</p>

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
 
export default About;
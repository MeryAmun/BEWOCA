import React from 'react';
import {  Nav,Button,Jumbotron,Carousel, Card, Container } from 'react-bootstrap';





const Education = () => {
    return ( 
        <div>
 <Jumbotron fluid className=" display-3 bg-dark sm-display-5">  
                <Nav.Item>
    <Nav.Link href="link-1"> <h1 className="head">YOUTH EDUCATION AND SKILLS BUILDING</h1></Nav.Link>
  </Nav.Item>
            </Jumbotron>
           
<Container className="fluid display-5-sm">
 <Container className="fluid d-flex">
<Carousel className="d-block w-100">
  <Carousel.Item>
  <Carousel.Caption>
    </Carousel.Caption>
    <img 
      className="d-block w-100"
      src="/images/e7.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
 <Carousel.Item>
  <Carousel.Caption> 
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="/images/aa.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Container>

<main className="">
<section className="d-flex">
<div className="para">
    <div>Welcome to Better World Community And Advocacy Organization (BEWOCA) official website.Here we belief that a little effort can make alot of difference in the life of an individual.We are A young NGO based in Bamenda, a city in the English Speaking part of Cameroon. 
    </div>
    <Button className="font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/about">Learn More</Nav.Link>
                  </Nav.Item>
                  </Button>
<br/>
    <div className="caro">
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="/images/a6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="/images/a5.jpg"
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h3 className="title text-seconadry dispaly-3">First Batch of Trainees in the Sandals making craft</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-auto"
      src="/images/a4.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="title">Cross-section of Products.</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  </div>
  
   

  <aside className="float-right">
<Card  className="card border border-white">
<div className="hov d-flex flex-wrap">
     <img
      className="d-block w-100"
      src="/images/a2.jpg"
      alt="Third slide"
     
    />
    </div>
  <Card.Body>
    <Card.Title><h3 className="font-weight-bold text-info">Empower a woman, save a family</h3></Card.Title>
    <Card.Text>
     Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads.
    </Card.Text>
    <Button className="font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/skills">Take Action</Nav.Link>
                  </Nav.Item>
                  </Button>
  </Card.Body>
</Card>
<Card  className="card border border-white">
 <img
      className="hov d-block w-100"
      src="/images/a1.jpg"
      alt="Third slide"
     
    />

  <Card.Body>
    <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
    <Card.Text>
    Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
    <Button className="font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/emergency">Take Action</Nav.Link>
                  </Nav.Item>
                  </Button>
  </Card.Body>
</Card>
</aside>
</section>

</main>
</Container>
        </div>
     );
}
 
export default Education;
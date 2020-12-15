import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';
import Image from "../images/d1.jpg"
import Image1 from "../images/d2.jpg"
import Image2 from "../images/d3.jpg"
import Image3 from "../images/a6.jpg"
import Image4 from "../images/a5.jpg"
import Image5 from "../images/a4.jpg"
import Image6 from "../images/a2.jpg"
import Image7 from "../images/a1.jpg"






const Home = () => {
  return (
    <div>
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="/contact"> <h1 className="head text-center p">HELP SOMEONE INTERNALLY DISPLACED <br/>BY THE WAR IN ENGLISH CAMEROON</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>
      <Carousel className="fluid d-block w-100">
      <Carousel.Item>
        <Carousel.Caption>
          <h1 className=" title font-weight-normal">Welcome to Better World Community And Advocacy Organization</h1>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <Container fluid className="display-5-sm">
        <Container className="fluid d-flex">
          
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <main className="">
          <section className="d-flex">
            <div className="para">
              <div> 
              <p className="note">Welcome to Better World Community And Advocacy 
              Organization (BEWOCA) official website.Here we belief that a little effort can make alot
               of difference in the life of an individual.We are A young NGO based in Bamenda, 
               a city in the English Speaking part of Cameroon.</p>
               <Button className="font-weight-bold bg-dark"> <Nav.Item>
                <Nav.Link href="/about">Learn More</Nav.Link>
              </Nav.Item>
              </Button>
    </div>
              
              <br />
              <div className="caro">
                <Carousel className="w-100">
                  <Carousel.Item interval={500}>
                    <img
                      className="car d-block w-100"
                      src={Image3}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="car d-block w-100"
                      src={Image4}
                      alt="Third slide"

                    />
                     <h3 className="title text-seconadry dispaly-3">First Batch of Trainees in the Sandals making craft</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="car d-block w-100 h-auto"
                      src={Image5}
                      alt="Third slide"
                    />
                     <h3 className="title text-dark">Cross-section of Products.</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <aside className="float-right">
              <Card className="card border border-white bg-secondary">
                <div className="hov d-flex flex-wrap">
                  <img
                    className="d-block w-100"
                    src={Image6}
                    alt="Third slide"

                  />
                </div>
                <Card.Body>
                  <Card.Title><h3 className="font-weight-bold text-info">Empower a woman, save a family</h3></Card.Title>
                  <Card.Text>
                    Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads.
    </Card.Text>
                  <Button className="font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/donate">Take Action</Nav.Link>
                  </Nav.Item>
                  </Button>
                </Card.Body>
              </Card>
              <Card className="card border border-white bg-secondary">
                <img
                  className="hov d-block w-100"
                  src={Image7}
                  alt="Third slide"

                />

                <Card.Body>
                  <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
                  <Card.Text>
                    Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
                  <Button className="font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/donate">Take Action</Nav.Link>
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

export default Home;
import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';
import Image from "../images/b3.jpg"
import Image1 from "../images/b5.jpg"
import Image2 from "../images/d2.jpg"
import Image3 from "../images/b1.jpg"
import Image4 from "../images/d5.jpg"
import Image5 from "../images/a2.jpg"
import Image6 from "../images/a1.jpg"






const Education = () => {
  return (
    <div>
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="link-1"> <h1 className="head">YOUTH EDUCATION AND SKILLS BUILDING</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>

      <Container className="fluid display-5-sm">

        <main className="">
          <section className="d-flex">
            <div className="para">
              <div>Here at BEWOCA, we believe that it is the skills that pay the bills.And so we our goal is to empower the youth,the single mother and the wife so as to ensure stability in the society since poverty is alliviated.We have carried out a couple of projects so far in the light of empowering the youths with skills for self employment. Here are some of the projects.
    </div>
              <Button className="font-weight-bold bg-dark"> <Nav.Item>
                <Nav.Link href="/partnerships">Learn More</Nav.Link>
              </Nav.Item>
              </Button>
              <br />
              <div className="caro">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Image}
                      alt="First slide"
                    />
                    <h3 className="title text-seconadry dispaly-3">Training in Mushroom production</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Image1}
                      alt="First slide"
                    />
                    <h3 className="title text-seconadry dispaly-3">Training in Mushroom production</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Image2}
                      alt="Third slide"

                    />
                    <h3 className="title text-seconadry dispaly-3">First Batch of Trainees in the Sandals making craft</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-auto"
                      src={Image3}
                      alt="Third slide"
                    />
                    <h3 className="title text-seconadry">Empower a woman, save a family</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-auto"
                      src={Image4}
                      alt="Third slide"
                    />
                    <h3 className="title text-seconadry">Empower a woman, save a family</h3>
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>



            <aside className="float-right">
              <Card className="card border border-white">
                <div className="hov d-flex flex-wrap">
                  <img
                    className="d-block w-100"
                    src={Image5}
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
              <Card className="card border border-white">
                <img
                  className="hov d-block w-100"
                  src={Image6}
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

export default Education;
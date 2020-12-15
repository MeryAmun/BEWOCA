import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';
import './css/about.css'
import Image from "../images/d3.jpg"
import Image1 from "../images/a3.jpg"
import Image2 from "../images/c3.jpg"
import Image3 from "../images/c4.jpg"
import Image4 from "../images/a3.jpg"
import Image5 from "../images/c9.jpg"
import Image6 from "../images/b4.jpg"







const About = () => {
  return (
    <div className="about">
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="/contact"> <h1 className="title text-center">WE BUILD, REPAIR, AND INSPIRE HOPE</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>
      <Carousel className="d-block w-100">
      <Carousel.Item>
        <Carousel.Caption>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image}
          alt="Third slide"
        />
        <h3 className="title text-center font-weight-bold text-dark lg display-5"> </h3>
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
    </Carousel>

      <Container className="fluid d-flex">
     
      </Container>

      <main className="main d-flex">
        <div className="section">

          <div>
          <p className="note">Better World Community and Advocacy Organization is a community based organization out to identify and prevent all forms of abuse on men, women and children; irrespective of who they are. We are committed to make sure that Human rights are communicated and respected; that unwanted pregnancy is prevented through education campaigns, that teenage girls are given a chance to better their lives after giving birth through vocational training. We also want to ensure school dropouts and street kids can better their lives through education and carry out rehabilitation programs to reduce the rate of GBV ( Gender Based Violence) by engaging men and women in constructive dialogue, accountability and providing the information, tools, emotional and psychosocial  support needed to make the About, communities, society, nation and the world a better place for all.
          <br />
          We are funded by members and goodwill donors. We are independent of any political ideology, economic interest or religious ideology. No individual or government is beyond scrutiny. No situation is beyond hope.</p>
          </div>

          <Carousel className="caro">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Image2}
                alt="Third slide"
              />
              <h3 className="title text-seconadry">Happy birthday Miss Akwi Takwe,<br />thank you for your endless sacrifice</h3>
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />
              <h3 className="title text-center">The Founder and CEO <br />Miss Ngoin Nsama says welcome!!</h3>
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>



        <aside className="aside">
          <Card className="card border border-white bg-secondary">
            <div className="d-flex flex-wrap">
              <img
                className="hov d-block w-100"
                src={Image4}
                alt="Third slide"
              />
              <img
                className="hov d-block w-100"
                src={Image5}
                alt="Third slide"
              />
            </div>
            <Card.Body>
              <Card.Title> <h3 className="title font-weight-bold text-info">Rape and Gender Based Violence</h3></Card.Title>
              <Card.Text>
                Gender Based Violence and rape are two monsters that are ever present in our communities.We are committed to fight these ugly beasts in every way,by providing th neccesary support to victims.
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
              src={Image6}
              alt="Third slide"

            />

            <Card.Body>
              <Card.Title><h3 className="title font-weight-bold text-info">Recognition</h3></Card.Title>
              <Card.Text>
                We are grateful to be recognized and appreciated for our little effort towards making life better.Without your donations,we would do nothing.To our donors,we say Thank you!!!
    </Card.Text>
            </Card.Body>
          </Card>
        </aside>
      </main>
    </div>
  );
}

export default About;
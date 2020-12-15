import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';
import Image from "../images/c2.jpg"
import Image1 from "../images/f2.jpg"
import Image2 from "../images/g7.jpg"
import Image3 from "../images/f1.jpg"
import Image4 from "../images/g5.jpg"
import Image6 from "../images/a2.jpg"
import Image7 from "../images/a1.jpg"







const Partnerships = () => {
  return (
    <div>
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="link-1"> <h1 className="head text-center">TOGETHER, WE CAN</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>
      <Carousel className="d-block w-100">
      <Carousel.Item>
        <Carousel.Caption>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image}
          height="800rem"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image2}
          height="800rem"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={Image3}
          height="800rem"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
      <Container className="fluid display-5-sm">
        <Container className="fluid d-flex">
          
        </Container>

        <main className="">
          <section className="d-flex">
            <div className="para">
              <div>BEWOCA, though barely a years old has worked in collaborration with a couple of other NGOs when it means taking action.It doesn't matter how small our contribution may be,we are open to cooperate as long as one life will be improved.Likewise we accept cooperation from other NGOs.
    </div>

              <br />
              <div className="caro">
                <Carousel>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Image1}
                      alt="First slide"
                    />
                    <Nav.Item>
                      <Nav.Link href="/incubator"> <h3 className="title text-center"> BEWOCA organization with other NGOs and civil society leader's in the North West. "The incubator"  Great things come out of this. We Move!</h3></Nav.Link>
                    </Nav.Item>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={Image4}
                      alt="Third slide"

                    />
                    <Nav.Item>
                      <Nav.Link href="/nyeneba"><h3 className="title text-center">Think Big organization in Partnership with Better World Community And Advocacy Organization.
                      Main objective
The main objective of this project is to lower the infant mortality rate of the people of Nyeneba by providing access to adequate health care and drugs to the community of Nyeneba.</h3></Nav.Link>
                    </Nav.Item>
                  </Carousel.Item>
                 
                </Carousel>
              </div>
            </div>



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

export default Partnerships;
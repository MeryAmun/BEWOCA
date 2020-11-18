import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';





const Donate = () => {
  return (
    <div>
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="link-1"> <h1 className="head">THANK YOU FOR YOUR KINDNESS</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>

      <Container className="fluid display-5-sm">
        <aside className="donate d-flex flex-column">

          <Card className="card border border-white">
            <div className="d-flex flex-wrap">
              <img
                className="d-block w-100"
                src="/images/c1.jpg"
                alt="Third slide"

              />
            </div>
            <Card.Body>
              <Card.Text>
                Some of the hidden but very seriou problems faced by women and girls displaced by war is access to sanitary materials.On this day in commemoration of the World Menstral Hygiene Day,BEWOCA shared some sanitary pads to some disabled women in Bamenda.Some men also came to collect for their wives and daughters. You can join to help women get supplies of sanitary paths.
    </Card.Text>

            </Card.Body>
          </Card>
          <Card className="card border border-white">
            <img
              className="d-block w-100"
              src="/images/b2.jpg"
              alt="Third slide"

            />

            <Card.Body>
              <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
              <Card.Text>
                You can sponsor and internally displaced person through leaning a trade...tailoring,hairdressing,shaving,Carpentary sandals making depending on your willingness.Wew believe that a little is alot.
    </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card border border-white">
            <div className="d-flex flex-wrap">
              <img
                className="d-block w-100"
                src="/images/a2.jpg"
                alt="Third slide"

              />
            </div>
            <Card.Body>
              <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
              <Card.Text>
                Remember that these people have left behind the debris of their one time homes,you can offer accomodation or pay rents for an internally displaced person.Any act of kindness can never be too small.These children need clothes,toys,food,etc.
    </Card.Text>

            </Card.Body>
          </Card>
          <Card className="card border border-white">
            <img
              className="d-block w-100"
              src="/images/a1.jpg"
              alt="Third slide"

            />

            <Card.Body>
              <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
              <Card.Text>
                Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
            </Card.Body>
          </Card>
          <Button className="font-weight-bold bg-dark"> <Nav.Item>
            <Nav.Link href="/contact">To make a donation, Click here</Nav.Link>
          </Nav.Item>
          </Button>
          <br />
          <br />
        </aside>
      </Container>
    </div>
  );
}

export default Donate;
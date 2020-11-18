import React from 'react';
import { Nav, Button, Jumbotron, Carousel, Card, Container } from 'react-bootstrap';





const Emergency = () => {
  return (
    <div>
      <Jumbotron fluid className=" display-3 bg-dark sm-display-5">
        <Nav.Item>
          <Nav.Link href="/donate"> <h1 className="head">A DISTRESS CALL</h1></Nav.Link>
        </Nav.Item>
      </Jumbotron>

      <Container className="fluid display-5-sm">
        <p className="title text-dark font-weight-bold">
          There is a war raging in the English speaking part of the Cameroons the past fours years which has led to a humanitarians crises.Hundreds of villages have been burnt down with thousands of homes and businesses.Thousands have died and millions of people are internally displaced.In the midst of such overwhelming pain and sorrow from loss of loved ones,homes and businesses, people are in dier need of assistance. You can help just one person today and it will make much difference.
          This is a real SOS because with schools shutdown and people displaced their needs are overwhelming.Ranging fom food,to shelter, sanitary needs for women,toys for children and skill building activities to empower them.
  </p>
        <aside className="emergency d-flex">
          <Card className="card border border-white">
            <div className="hov d-flex flex-wrap">
              <img
                className="d-block w-100"
                src="/images/a2.jpg"
                alt="Third slide"

              />
            </div>
            <Card.Body>
              <Card.Text>
                Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>

            </Card.Body>
          </Card>
          <Card className="card border border-white">
            <img
              className="hov d-block w-100"
              src="/images/a1.jpg"
              alt="Third slide"

            />

            <Card.Body>
              <Card.Title><h3 className="font-weight-bold text-info">Emergency</h3></Card.Title>
              <Card.Text>
                Hundresd of villages have been burnt to the grown,this implies that tens of thousands of homes and businesses destroyed and hundreds of thousands displaced.
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
              src="/images/g5.jpg"
              alt="Third slide"

            />

            <Card.Body>
              <Card.Text>
                Access to healthcare is another very raer prevelage for those fleeing conflict areas
    </Card.Text>

            </Card.Body>
          </Card>
        </aside>
      </Container>
    </div>
  );
}

export default Emergency;
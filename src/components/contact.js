import React from 'react';
import {Link} from 'react-router-dom'
import {  Nav,Button,Jumbotron,Carousel, Card, Container } from 'react-bootstrap';





const Contact = () => {
    return ( 
        <div>
 <Jumbotron fluid className=" display-3 bg-dark sm-display-5">  
                <Nav.Item>
    <Nav.Link href="link-1"> <h1 className="head">THANKS FOR REACHING OUT</h1></Nav.Link>
  </Nav.Item>
            </Jumbotron>
           
<Container className="fluid display-5-sm">
<section className="d-flex justify-content-between">
<main className="contact bg-light">
<div className="d-flex justify-content-center flex-row">
<Link to="/">
<i className="icons fa fa-home fa-2x" aria-hidden="true"></i>
        </Link>
 <Nav.Item>
<Nav.Link className="font-weight-bold text-info" href="/about">ABOUT US</Nav.Link>
    </Nav.Item>
</div>
<Jumbotron className="bg-light">  
               
    <h1 className="title font-weight-bold text-info text-center">CONTACT</h1>

            </Jumbotron>
            <p>For all enquiries concerning child protection,youth activism etc, including sponsorship and donations,job enquiries,press enquiries,contact the following addresses.
            </p>
            <h3 className="title font-weight-bold text-info">OUR REGISTERED OFFICE</h3>
          <p>Our registered office is located at <h4 className="title font-weight-bold text-info">Red field Nghomham Bamenda Cameroon</h4></p>
          <p>You can also contact us on phone through the following numbers</p>
          <h3 className="title font-weight-bold text-info">(+237) 674513391</h3>
          <h3 className="title font-weight-bold text-info">(+237) 654292637</h3>
          <p>For any other enquiries you can fill out our <Nav.Item>
                    <Nav.Link href="/form">Contact form</Nav.Link>
                  </Nav.Item></p>
                  <br/>
                  <br/>
                  <br/>
                  <div className="icon2 d-flex justify-content-between flex-column">
        <h3 className="tex text-info">Follow Us</h3>
        <div className="icons flex-column-sm ">
        <Link to="https://web.facebook.com/Better-World-Community-And-Advocacy-Organisation-166805994242255">
        <i className="fa fa-facebook-square fa-5x" aria-hidden="true"></i>
        </Link>
        <Link to="#">
        <i className="fa fa-twitter-square fa-5x" aria-hidden="true"></i>
        </Link>
        <Link to="#">
        <i className="fa fa-instagram fa-5x" aria-hidden="true"></i>
        </Link>
        </div>
       
       
       
        </div>

</main>

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
    <Card.Title><h3 className="title font-weight-bold text-info">Empower a woman, save a family</h3></Card.Title>
    <Card.Text>
     Sponsor an Internally displaced person to learn a trade or donate to our project aimed at training women and girls on how to make sandals and bags using beads.
    </Card.Text>
    <Button className="title font-weight-bold bg-dark"> <Nav.Item>
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
    <Card.Title><h3 className="title font-weight-bold text-info">Emergency</h3></Card.Title>
    <Card.Text>
    Women and children are the ones who bare the greatest brunts of war.A bloody civil war is raging in the Cameroons,the humanitarian crisis is overwhelming.Women and children have been targets in the recent weeks.
    </Card.Text>
    <Button className="title font-weight-bold bg-dark"> <Nav.Item>
                    <Nav.Link href="/emergency">Take Action</Nav.Link>
                  </Nav.Item>
                  </Button>
  </Card.Body>
</Card>
</aside>
</section>
</Container>
        </div>
     );
}
 
export default Contact;
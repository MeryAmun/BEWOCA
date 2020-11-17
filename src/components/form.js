import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {  Nav,Button,Jumbotron,Col, Row,Form,InputGroup, Container } from 'react-bootstrap';





const MyForm = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return ( 
        <div>
 <Jumbotron fluid className=" display-3 bg-dark sm-display-5">  
                <Nav.Item>
    <Nav.Link href="link-1"> <h1 className="head">THANKS FOR REACHING OUT</h1></Nav.Link>
  </Nav.Item>
            </Jumbotron>
     
<Container className="fluid display-5-sm">
<Jumbotron>
    <h1 className="title text-bold text-info">CONTACT US FORM</h1>
</Jumbotron>

<p>If you have a general comment or question about BEWOCA or this website please fill out the form below.</p>



<Form className="text-dark" noValidate validated={validated} onSubmit={handleSubmit}>
      <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="General query"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Website feedback"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Working with BEWOCA"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Complaint"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Financial issues"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Other"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
        <Col>
          <Form.Group as={Col} md="4" controlId="validationCustomFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
  
    <Form.Group as={Col} md="4" controlId="validationCustomemail">
    <Form.Label column sm={2}>
     Email Adress
    </Form.Label>
    <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
    <Col sm={10}>
      <Form.Control type="text" 
      placeholder="email"
      aria-describedby="inputGroupPrepend"
                required />
    </Col>
    <Form.Control.Feedback type="invalid">
                Please add an email address.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
       
          <Form.Group as={Col} md="6" controlId="validationCustomCountry">
            <Form.Label>Country of residence</Form.Label>
            <Form.Control type="text" placeholder="Country" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustomMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3}  placeholder="message" required />
  </Form.Group>
        </Col>
        <Button type="submit">Submit form</Button>
      </Form>
      <br/>
      <br/>
      <br/>
</Container>
 </div>
     );
}
 
export default MyForm;
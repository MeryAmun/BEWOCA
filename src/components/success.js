import React from 'react'
import { Nav, Jumbotron } from 'react-bootstrap';

const Success = () => {
  return (
    <div className="App">
      <Jumbotron className='fluid display-3 bg-dark sm-display-5'>
        
      <Nav.Item>
        <Nav.Link href="link-1"> <h1 className="head">THANKS FOR REACHING OUT</h1></Nav.Link>
      </Nav.Item>
      </Jumbotron>

      <div className='container'>
        <p className='text-bold'> Your message has been received,we appreciate you for reaching out to us.<br/>We will Keep in touch.<br/>
    <h6>BEWOCA admin</h6>
    
    </p>
        
        </div>
        <br/>
        <br/>
        <br/>
        </div>
  )
}
export default Success
import React, {Component} from 'react';
import { Nav, Jumbotron } from 'react-bootstrap';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }


  onTitleChange(event) {
    this.setState({title: event.target.value})
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  async handleSubmit(e) {
 e.preventDefault();
 this.props.history.push('/success')


 const {title, name, email, subject, message} = this.state

 const form = await axios.post('/api/form', {

  title,
  name,
  email,
  subject,
  message
 })
 //redirect
 
  
  }


  render() {

    return(
      <div className="App">
      <Jumbotron classNameName='fluid display-3 bg-dark sm-display-5'>
        
      <Nav.Item>
        <Nav.Link href="link-1"> <h1 className="head">THANKS FOR REACHING OUT</h1></Nav.Link>
      </Nav.Item>
      </Jumbotron>

      <div className='container'>
           
    
        <br/>
        <br/>
        <br/>
                <div className='jumbotron'>
                <h1 className="title text-bold text-info">CONTACT US FORM</h1>
              </div>
              <p>If you have a general comment or question about BEWOCA please fill out the form below.</p>

              
    <div className='container w-50'>
    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}  action='/form' method="POST">


    <div className='form-group'>
        <label for="validationDefaultTitle">Title</label>
        <input type="text" className="form-control" id="validationDefaultTitle" placeholder='e.g, Mrs' value={this.state.title} onChange={this.onTitleChange.bind(this)} required/>
      </div>
      <div className='form-group'>
        <label for="validationDefaultName">Name</label>
        <input type="text" className="form-control" id="validationDefaultName"  value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
      </div>
      <div className="form-group">
        <label for="validationDefaultEmail">Email Address</label>
        <input type="email" className="form-control" id="validationDefaultEmail"  value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
      </div>
      <div className="form-group">
        <label for="validationDefaultSubject">Subject</label>
        <input type="text" className="form-control" id="validationDefaultSubject"  value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required/>
      </div>
      <div className="form-group">
      <label for="validationDefaultMessage">Message</label>
      <textarea className="form-control" rows="5"   value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
    </div>
    
    <button className="btn btn-primary" type="submit">Submit form</button>
  </form>
        <br/>
        <br/>
        <br/>
        </div>
        </div>
      </div>
    );
  }

  
}

export default App;
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
//import Image from "../images/a1.jpg"


class BlogCommentForm extends Component {
    constructor(){
        super()
        this.state = {
          name: "",
           comment: "",
            
           
        }
    }


    onNameChange(event) {
      this.setState({name: event.target.value})
    }
    onCommentChange(event) {
      this.setState({comment: event.target.value})
    }
    
    async handleSubmit(e) {
     e.preventDefault();
       //const { comment} = this.state
    
     const submit = 
      await axios.post('http://localhost:5000/api/insert',{
        commentAuthor: this.state.name, 
      commentText: this.state.comment}).then(() => {
        alert('Successful Insert')
      })
    
     }
     //redirect
     
      
     // }
    

    render() {
       
        return (
            <div className='container'>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}  action='/blogCommentForm' method="POST">
            <div className='form-group'>
            <label htmlFor="validationDefaultName">Name</label>
            <input type="text" className="form-control" id="validationDefaultName"   value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
          </div>

      <div className="form-group">
      <label htmlFor="validationDefaultComment">Comment</label>
      <textarea className="form-control" rows="5"   id="validationDefaultComment" value={this.state.comment}  onChange={this.onCommentChange.bind(this)} required/>
    </div>
    
    <button className="btn btn-primary" type="submit" onChange={this.handleSubmit}>Post Comment</button>
  </form>
  <br/>
  <br/>
  <br/>
  <br/>
</div>
        )
    }
}
export default BlogCommentForm
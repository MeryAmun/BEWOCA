import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
//import Image from "../images/a1.jpg"




class BlogComment extends Component {
    constructor(){
        super()
        this.state = {
           comment: [],
            
           
        }
    }


      onCommentChange(event) {
        this.setState({comment: event.target.value})
      }
    
      async handleSubmit(e) {
     e.preventDefault();
       console.log(this.setState);
     //this.props.history.push('/success')
    
    
     const { comment} = this.state
    
    // const form = await axios.post('/api/comment', {
    
      
     // comment
    // })
     //redirect
     
      
      }
    

    render() {
       
        return (
            <div className='container'>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}  action='/comment' method="POST">

      <div className="form-group">
      <label for="validationDefaultComment">Comments</label>
      <textarea className="form-control" rows="5"   value={this.state.comment} onChange={this.onCommentChange.bind(this)} required/>
    </div>
    
    <button className="btn btn-primary" type="submit">comment</button>
  </form>
  <br/>
  <br/>
            </div>
        )
    }
}
export default BlogComment
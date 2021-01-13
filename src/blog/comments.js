import React, { Component } from 'react'
import CommentItem from './commentList';




class Comments extends Component {
  state = { 
      comments: [
       { name: "Suh Bongnwi", text: "We love you bewoca",  id: '1'},
       { name: "Suh Bongnwi", text: "We love you bewoca", id: '2'}, 
       { name: "Suh Bongnwi", text: "We love you bewoca", id: '3'}, 
       { name: "Suh Bongnwi", text: "We love you bewoca", id: '4'}
      ]
    
    }

    render() {
        return (
            <div className='container col'>
            <h3>Comments</h3>
            <div className='d-flex flex-col'>
  
            {//this.state.comments.map((comment) =>{
          
              //<p className='text-dark text-bold display-3'>{comment}</p>
           // })
          }
            </div>
               <CommentItem comments={this.state.comments} />
            </div>
        )
    }
}
export default Comments
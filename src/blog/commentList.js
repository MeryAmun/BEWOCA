import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'



 const CommentList = () => {
     const [commentListItem, setCommentListItem] = useState();

    useEffect(() => {

        axios.get('http://localhost:5000/api/get').then((response) => {
            setCommentListItem(response.data)
          })
        
         


    }, [])
    return (
        <div>
         {
commentListItem.map((val) =>{
    return(
       <div className='container'>
       <p>commentText:{val.commentText}</p> 

       <h4>commentAuthor: {val.commentAuthor}</h4>
       
       </div>
       
    )
})

         }   
        </div>
    )
}
export default CommentList
    
      //  return (
            //<div className="comment-list">
           // {commentList}
          //  </div>
       //)
  
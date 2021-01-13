import React, { Component } from 'react'
import fetch from "isomorphic-fetch";
import BlogCommentForm from './blogCommentForm';
import CommentItem from './commentList';


class SingleVideo extends Component {
    constructor(){
        super()
        this.state = {
            singleVideo: {},
          
        }
    }


    componentDidMount(){
        
        fetch(`http://localhost:1337/videos/${this.props.match.params.id}`).then((response)=>{
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((video)=>{
  
    this.setState({singleVideo: video})
    
})

    }

    render() {
        
        const {id,videoTitle,videoText, videoContent, postedOn,categories, authorName, authorPosition, authorImage} = this.state.singleVideo;
        
        return (
            <div className='container' key={id}>
            <br/>
            <br/>

               <h1 className='text-bold text-info text-center'>{videoTitle}</h1> 
               <br/>
               <br/>
               <br/>
               <div className="video">
               <video controls>
        <source src= {`https://localhost:1337/${videoContent}`}
        alt={videoTitle} type="video/mp4"></source>
    </video>
               </div>

               <br/>
               <h6 className='text-bold text-dark text-center'>Posted on the <br/>{postedOn}</h6>
               <p className='lead'>{videoText}</p>
               <br/>
               <br/>
               <div className='card d-flex flex-row border-white bg-white text-dark'>
        <div className="card-title">
        <h5 className="text-bold text-dark">{authorName}</h5>
        <h5 className="text-bold text-darK">{authorPosition}</h5>
         </div>
         <br/>
         <img
          className="author-image d-block" width="100px"
            src={authorImage ? authorImage.url : ""} 
            alt={videoTitle}
          />
        </div>
        <br/>
        <br/>
        <br/>
        <BlogCommentForm />
        <CommentItem />
            </div>
        )
    }
}
export default SingleVideo

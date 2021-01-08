import React, { Component } from 'react'
import fetch from "isomorphic-fetch";
import BlogComment from './blogComment';


class SingleBlog extends Component {
    constructor(){
        super()
        this.state = {
            SingleBlog: {},
           // BlogImage: ""
        }
    }


    componentDidMount(){
        
        fetch(`http://localhost:1337/blogs/${this.props.match.params.id}`).then((response)=>{
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((blog)=>{
  
    this.setState({SingleBlog: blog})
    //this.setState({BlogImage:blog.blogImage.url})
})

    }

    render() {
        
        const {id,blogtitle, createdAt, blogcontent, blogImage, blogVideo, authorName, authorPosition, authorImage, categories} = this.state.SingleBlog;
        
        return (
            <div className='container' key={id}>
            <br/>
            <br/>

               <h1 className='text-bold text-info text-center'>{blogtitle}</h1> 
               <br/>
               <br/>
               <br/>
               <div className="card-image">
               <img width="800px"  src={blogImage ? blogImage.url : ""} alt={blogtitle}/>
               </div>
               <br/>
               <h6 className='text-bold text-dark text-center'>Posted on the <br/>{createdAt}</h6>
               <p className='lead'>{blogcontent}</p>
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
            alt={blogtitle}
          />
        </div>
        <br/>
        <br/>
        <br/>
        <BlogComment />
            </div>
        )
    }
}
export default SingleBlog

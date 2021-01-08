import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import BloglistItem from './bloglistItem';
import {Link} from 'react-router-dom'





class Bloglist extends Component {
    constructor(){
        super()
        this.state = {
            blogs: [],
           
           
        }
    }

componentDidMount() {
fetch('http://localhost:1337/blogs').then((response)=>{
    
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((blogs)=>{
    this.setState({
    blogs:blogs
    })
})


}

    render() {
    //const {id,blogtitle,blogcontent,categories} = this.state.blogs;
       
        return (
            <div className="bloglist bg-white">
               {

                this.state.blogs.map(({id,blogtitle,blogcontent, blogImage, blogSummary, blogVideo, createdAt,categories, authorName, authorPosition, authorImage}) => (
                   <div className='container'>
                   <br/>
                   <br/>
                   <br/>  
                   <div className=''>
        
                    <BloglistItem key={id} blogtitle={blogtitle} blogcontent={blogcontent} blogImage={blogImage} blogSummary={blogSummary} blogVideo={blogVideo}  createdAt={createdAt} categories={categories} authorName={authorName} authorPosition={authorPosition} authorImage={authorImage}/>
                    <br/>
                    <Link to={`/singleblog/${id}`} className="btn btn-md text-center btn-dark">Learn More</Link>
                   </div>
                   <br/>
                   <br/>
                   </div>
                ))
                   /* this.state.blogs.map((blog) => (
                        
                     
                   <div className="container ">
                    <br/>
                    <br/>
                    <br/>
                    <div className="card border-secondary mb-3" key={blog.id}> 
                    <div className='card-header text-dark'>{blog.category}</div>
                   <h3 className="card-title text-center text-info">{blog.blogtitle}</h3>
                   <div className="card-body"> 
                   <img width="200px" src={blog.blogImage ? blog.blogImage.url : ""} alt={blog.blogtitle}/>
                   <br/>
                   <p>{blog.blogcontent}</p> 
                   <h5>{blog.createdAt}</h5>
                   </div>
                  <Link to={`/singleblog/${blog.id}`} className="btn btn-md text-center btn-info">Learn More</Link>
                    </div>
                    </div>

                    ))*/
                }
            </div>
        )
    }
}
export default Bloglist
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fetch from 'isomorphic-fetch';
//import Image from "../images/a1.jpg"




class Bloglist extends Component {
    constructor(){
        super()
        this.state = {
            blogs: []
           
        }
    }

componentDidMount() {
fetch('http://localhost:1337/blogs').then((response)=>{
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((blogs)=>{
    console.log(blogs)
    this.setState({
    blogs:blogs
    })
})


}

    render() {
     console.log(this.state.blogs)
       // const {id,blogtitle,blogcontent,categories} = this.state.blogs;
        return (
            <div>
               {

                //this.state.blogs.map(({id,blogtitle,blogcontent,featuredimage,categories}) =>{
                // <h1>{blogtitle}</h1>   
               // })
                    this.state.blogs.map((blog) => (
                        
                     
                   <div className="container ">
                    <br/>
                    <br/>
                    <br/>
                    <div className="card border-secondary mb-3" key={blog.id}> 
                    <div className='card-header text-dark'>{blog.category}</div>
                   <h3 className="card-title text-center text-info">{blog.blogtitle}</h3>
                   <div className="card-body"> 
                   <img width="200px" src={blog.featuredimage ? blog.featuredimage.url : ""} alt={blog.blogtitle}/>
                   <br/>
                   <p>{blog.blogcontent}</p> 
                   </div>
                  <Link to={`/singleblog/${blog.id}`} className="btn btn-md text-center btn-success">Learn More</Link>
                    </div>
                    </div>

                    ))
                }
            </div>
        )
    }
}
export default Bloglist
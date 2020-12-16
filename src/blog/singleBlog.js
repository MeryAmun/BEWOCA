import React, { Component } from 'react'
import fetch from "isomorphic-fetch";


class SingleBlog extends Component {
    constructor(){
        super()
        this.state = {
            SingleBlog: {},
            BlogImage: ""
        }
    }


    componentDidMount(){
        
        fetch(`http://localhost:1337/blogs/${this.props.match.params.id}`).then((response)=>{
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((blog)=>{
  
    this.setState({SingleBlog:blog})
    this.setState({BlogImage:blog.featuredimage.url})
})

    }

    render() {
        const {id,blogtitle,blogcontent,categoryname} = this.state.SingleBlog;
        return (
            <div className='jumbotron' key={id}>
            <div className=''>{categoryname}</div>
               <h1 className='display-8'>{blogtitle}</h1> 
               <img width="200px" src={this.state.BlogImage} alt='blogImage'/>
               <p className='lead'>{blogcontent}</p>
            </div>
        )
    }
}
export default SingleBlog

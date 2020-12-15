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
    console.log(blog)
    this.setState({SingleBlog:blog})
    this.setState({BlogImage:blog.featuredimage.url})
})

    }

    render() {
        console.log(this.props.match.params.id)
        const {id,blogtitle,blogcontent,categories} = this.state.SingleBlog;
        return (
            <div className='jumbotron'>
               <h1 className='display-8'>{blogtitle}</h1> 
               <img width="100%" src={`[http://localhost:1337/${this.state.BlogImage}`} alt=''/>
               <p className='lead'>{blogcontent}</p>
            </div>
        )
    }
}
export default SingleBlog

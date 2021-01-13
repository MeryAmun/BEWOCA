import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import VideoListItems from './videolistitems';
import {Link} from 'react-router-dom'





class VideoList extends Component {
    constructor(){
        super()
        this.state = {
           videos: [],
           
           
        }
    }

componentDidMount() {
fetch('http://localhost:1337/videos').then((response)=>{
    
    if(response.status >= 400){
        throw new Error('Bad Response From Server');
    }
    return response.json();
}).then((videos)=>{
    this.setState({
   videos:videos
    })
})


}

    render() {
   
        return (
            <div className="VideoList bg-white">
               {

                this.state.videos.map(({id,videoTitle,videoText, videoContent, postedOn,categories, authorName, authorPosition, authorImage}) => (
                   <div className='container'>
                   <br/>
                   <br/>
                   <br/>  
                   <div className=''>
        
                    <VideoListItems key={id} videoTitle={videoTitle} videoText={videoText} videoContent={videoContent}  postedOn={postedOn} categories={categories} authorName={authorName} authorPosition={authorPosition} authorImage={authorImage}/>
                    <br/>
                    <Link to={`/singlevideo/${id}`} className="btn btn-md text-center btn-dark">Learn More</Link>
                   </div>
                   <br/>
                   <br/>
                   </div>
                ))
                   
                }
            </div>
        )
    }
}
export default VideoList
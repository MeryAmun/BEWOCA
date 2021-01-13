import React from 'react'
import {Link} from 'react-router-dom'
import {  Card} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Image from "../images/vid.mp4"



const VideoListItems = ({id,videoTitle,videoContent, videoText, postedOn,  authorName, authorPosition, authorImage, categories, url}) => {
    const category = categories.map((category) =>{
        return category.categoryname

    })
    
    return (
        <div className='container'>

        <Card className="card row border border-info bg-dark text-white">
        <br/>
        <Card.Title> <h2 className="title font-weight-bold text-white bg-dark text-center ">{category}</h2></Card.Title>
       
        <video controls>
        <source src= {Image}
        alt={videoTitle} type="video/mp4"></source>
    </video>
    


         {/*<ReactPlayer
            controls

            url={videoContent ? videoContent.url : ""} 
            alt={videoTitle}
          />*/}
          
       
        <Card.Body>
          <Card.Title> <h2 className="title font-weight-bold text-info">{videoTitle}</h2></Card.Title>
          <Card.Text>
            {videoText}
            <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='card d-flex flex-row border-dark bg-dark text=white'>
        <div className="card-title">
        <br/>
        <h5 className="text-bold text-white">{authorName}</h5>
        <h5 className="text-bold text-white">{authorPosition}</h5>
        <br/>
         </div>
         <br/>
         <br/>
         <img
          className="author-image d-block" width="100px"
            src={authorImage ? authorImage.url : ""} 
            alt={videoTitle}
          />
        </div>
</Card.Text>
          <div className=''>
          <br/>
          <p className='text-bold text-white text-center'>Posted on the <br/>{postedOn}</p>
          <Link to="" className="btn btn-md text-center text-dark bg-dark">Learn More</Link>
          </div>
        </Card.Body>
      </Card>
        <br/>
        
        </div>
    )
}
export default VideoListItems
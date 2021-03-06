import React from 'react'
import {Link} from 'react-router-dom'
import {  Card} from 'react-bootstrap';




const BloglistItem = ({id,blogtitle,blogcontent, blogSummary, blogImage, blogVideo, createdAt,  authorName, authorPosition, authorImage, categories}) => {
    const category = categories.map((category) =>{
        return category.categoryname

    })
    
    return (
        <div className='container'>

        <Card className="card row border border-info bg-dark text-white">
        <br/>
        <Card.Title> <h2 className="title font-weight-bold text-white bg-dark text-center ">{category}</h2></Card.Title>
       
          <img
            className="d-block w-100"
            src={blogImage ? blogImage.url : ""} 
            alt={blogtitle}
          />
          
       
        <Card.Body>
          <Card.Title> <h2 className="title font-weight-bold text-info">{blogtitle}</h2></Card.Title>
          <Card.Text>
            {blogSummary}
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
            src={authorImage ? authorImage.url : blogVideo.url} 
            alt={blogtitle}
          />
        </div>
</Card.Text>
          <div className=''>
          <br/>
          <p className='text-bold text-white text-center'>Posted on the <br/>{createdAt}</p>
          <Link to="" className="btn btn-md text-center text-dark bg-dark">Learn More</Link>
          </div>
        </Card.Body>
      </Card>
        <br/>
        
        </div>
    )
}
export default BloglistItem
import React from 'react'


const BloglistItem = ({id,blogtitle,blogcontent,featuredimage,categories}) => {
    
    return (
        <div className='çol-12'>
        <div className="card border-secondary mb-3">
        <div className="card-header">{categories}</div>
        <div className="card-body">
    <img width="100%" src={"http://localhost:1337/$featuredimage.formats.medium.url"} alt=''/>
        <h4 className="card-title">{blogtitle}</h4>
        </div>
        </div>
            
        </div>
    )
}
export default BloglistItem
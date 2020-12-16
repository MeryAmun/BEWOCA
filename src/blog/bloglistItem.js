import React from 'react'


const BloglistItem = ({id,blogtitle,blogcontent,featuredimage,categoryname}) => {
    const categories = categories.map((category) =>{
        return category.categoryname

    })
    
    return (
        <div className='çol-12'>
        <div className="card border-secondary mb-3">
        <div className="card-header">{categories}</div>
        <div className="card-body">
        <img width="200px" src={featuredimage ? featuredimage.url : ""} alt={blogtitle}/>
        <br/>
        <h4 className="card-title">{blogtitle}</h4>
        </div>
        </div>
            
        </div>
    )
}
export default BloglistItem
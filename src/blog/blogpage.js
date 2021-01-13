import React from 'react'
import Bloglist from './bloglist'
import VideoList from './videoList'


 const BlogPage = () => {
    return (
        <div className='bloglist container'>
  <Bloglist />
   <VideoList />       
        </div>
    )
}
export default BlogPage


import { useEffect, useState } from 'react';
import BlogPage from './BlogPage';
import axios from 'axios';


const Blog = () => {
  // Example car-related blog post data

  const [blogPost, setBlogPost] = useState([])
 
  useEffect(()=>{

    axios.get('https://car-doctor-server-one-gamma-38.vercel.app/blogs')
    .then(res => {
      setBlogPost(res.data);
    })
  })

  return (
    <div>

      <div>
      <BlogPage key={blogPost._id} blogPost={blogPost} />
      </div>
     
    </div>
  );
};

export default Blog;

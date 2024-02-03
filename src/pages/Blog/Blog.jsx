
import { useEffect, useState } from 'react';
import BlogPage from './BlogPage';
import axios from 'axios';


const Blog = () => {
  // Example car-related blog post data

  const [blogPost, setBlogPost] = useState([])
  
  useEffect(()=>{

    axios.get('http://localhost:5000/blogs')
    .then(res => {
      setBlogPost(res.data);
    })
  })

  return (
    <div>

      <div>
      <BlogPage blogPost={blogPost} />
      </div>
     
    </div>
  );
};

export default Blog;

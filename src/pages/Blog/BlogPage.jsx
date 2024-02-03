

import PropTypes from 'prop-types';
import BlogSwiper from './BlogSwiper/BlogSwiper';


const BlogPage = ({ blogPost }) => {
  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Car Repair </h1>

      {blogPost.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-md shadow-md mb-8">
          <div className='h-80 grid lg:grid-cols-3 md:grid-cols-2 '>
            <div className=' h-80 lg:col-span-2 md:col-span-1 p-4'>
              <img src={post.Image1} alt={post.title} className="h-full w-full  rounded" />

            </div>
            <div className='h-80 lg:col-span-1 md:col-span-1'>
              <div className='h-80'>
                {/* <img src={post.Image2} alt={post.title} className="h-2/5 w-full  mb-4 rounded" />
                <img src={post.Image3} alt={post.title} className="h-2/5 w-full   rounded" /> */}
               <div className='h-full w-full text-right'>
               <BlogSwiper
                img1={post.Image2}
                img2={post.Image3}
                ></BlogSwiper>
               </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-2">Author: {post.author}</p>
          <p className="text-gray-600 mb-2">Published on: {post.date}</p>
          <p className="mb-4">{post.content.substring(0, 150)}...</p>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-blue-500 hover:underline">Read More</span>
            </div>

            <div>
              <span className="text-gray-600 mr-2">Categories: {post.categories.join(', ')}</span>
              <span className="text-gray-600">Tags: {post.tags.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
BlogPage.propTypes = {

  blogPost: PropTypes.object

};


export default BlogPage;

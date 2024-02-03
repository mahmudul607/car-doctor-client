import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay,  EffectCube,  Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip'; // Import the flip effect styles
import './BlogSwiper.css'; // Create a CSS file for your styles
import PropTypes from 'prop-types';

const BlogSwiper = ({img1, img2}) => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      // configure swiper to use modules
      modules: [Navigation, Pagination, Autoplay, EffectCube],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
      effect: 'cube', // Apply the flip effect
      grabCursor: true, // Show a grab cursor during the flip
      autoplay: {
        delay: 2000, 
        disableOnInteraction: true,
      },
    
    EffectCube:{
        shadow: true,
        shadowOffset:20,
        shadowScale: 0.94,
        slideShadows:true

    }
       

    
    });

    // Destroy Swiper on unmount
    return () => {
        swiper
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="swiper-container overflow-hidden m-2 p-4 w-full h-full  ">
      <div className="swiper-wrapper h-full w-full">
        <div className=" swiper-slide h-full w-full ">
          <div className="image-container  mx-auto">
            <img className='h-full w-full' src={img1} alt="" />
          </div>
        </div>
        <div className="swiper-slide h-full w-full ">
          <div className="image-container mx-auto">
            <img className='h-full w-full' src={img2} alt="" />
          </div>
        </div>
       
      
        {/* Add more slides as needed */}
      </div>
      
      
    </div>
  );
};
BlogSwiper.propTypes ={
    img1: PropTypes.image,
    img2: PropTypes.image,
}

export default BlogSwiper;

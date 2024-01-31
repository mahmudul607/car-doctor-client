import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip'; // Import the flip effect styles
import slideImg1 from "../../../../assets/images/products/1.png";
import slideImg2 from "../../../../assets/images/products/2.png";
import slideImg3 from "../../../../assets/images/products/3.png";
import slideImg4 from "../../../../assets/images/products/4.png";
import slideImg5 from "../../../../assets/images/products/5.png";
import './SwiperComponent.css'; // Create a CSS file for your styles

const SwiperComponent = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      // configure swiper to use modules
      modules: [Navigation, Pagination, EffectFlip, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      effect: 'flip', // Apply the flip effect
      grabCursor: true, // Show a grab cursor during the flip
      autoplay: {
        delay: 2000, // Set autoplay delay in milliseconds (e.g., 2000ms = 2 seconds)
        disableOnInteraction: false,
      },
      flipEffect: {
        limitRotation: true,
        sideShadow: false,
      },
    });

    // Destroy Swiper on unmount
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="swiper-container overflow-hidden pt-4  ">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="image-container text-center">
            <img className='h-full w-full' src={slideImg1} alt="" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="image-container text-center">
            <img className='h-full w-full' src={slideImg2} alt="" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="image-container text-center">
            <img className='h-full w-full' src={slideImg3} alt="" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="image-container text-center">
            <img className='h-full w-full' src={slideImg4} alt="" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="image-container text-center">
            <img className='h-full w-full' src={slideImg5} alt="" />
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
      
      
    </div>
  );
};

export default SwiperComponent;

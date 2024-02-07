
import PropTypes from 'prop-types';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/images/cars/Audi A4/2ca0a2d14d829f6497abdc12657bb458.png"
import img2 from "../../../assets/images/cars/BMW 3 Series/a5ece93b84e433beb5a6a0528a39c7fb.png"
import img3 from "../../../assets/images/cars/Chevrolet Corvette/1d8595aabbdfd9984a273962d777d959.png"
import img4 from "../../../assets/images/cars/Ford Mustang/4b97f4b418670afe845ea5b141c902d3.png"
import img5 from "../../../assets/images/cars/Honda Civic/ef39729cc97dc68ab8b1b7adace60126.png"
import img6 from "../../../assets/images/cars/Mercedes-Benz C-Class/e90ae90ff86cb465f2d2d9cb29d408b1.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import './ShopCarousel.css'

const ShopCarousel = () => {
    return (
        <Carousel infiniteLoop autoFocus autoPlay className="shop-carousel">
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img1} />
            </div>


        </div>
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img2} />
            </div>


        </div>
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img3} />
            </div>


        </div>
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img4} />
            </div>


        </div>
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img5} />
            </div>


        </div>
        <div className="slide-area flex w-full justify-between">
            <div className="text-left place-items-center my-auto pl-10 lg:w-2/5">
                <p className=" text-black flex"><FaThumbsUp className="text-green-600"/> <span className="pl-4">100% Trusted car rental platform in the World</span></p>
                <h1 className="text-6xl font-extra-bold font-salsa text-black">Find Your Best <br/> <span className="text-[#FF3811]">Dream Car for Rental</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                <button className="btn btn-outline my-4 text-[#FF3811]">View All Cars <FaArrowRightLong/></button>
            </div>
            <div className="lg:w-3/5">
                <img className="banner-img w-full " src={img6} />
            </div>


        </div>
       

       
    </Carousel>
    );
};

ShopCarousel.propTypes = {
    props: PropTypes.node
    
};

export default ShopCarousel;
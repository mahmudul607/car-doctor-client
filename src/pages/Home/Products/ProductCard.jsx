
import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";


const ProductCard = ({product}) => {

    const {title, img, price, ratting} = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl gap-2">
            <figure className="px-10 pt-10">
                <img src={img} alt="image" className="rounded-xl h-[220px]" />
            </figure>
            <div className="card-body  items-center">
                <div className='flex gap-2'>
                <FaRegStar className='text-red-600 items-center text-2xl'/>
                <FaRegStar className='text-red-600 items-center text-2xl'/>
                <FaRegStar className='text-red-600 items-center text-2xl'/>
                <p className='text-green-600 text-2xl'>{ratting}</p>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-[#FF3811]'>{price}</p>
                <div className="card-actions w-full">
                    <button className="btn hover:btn-primary w-full bg-[#FF3811]">Buy Now</button>
                    {/* <FaArrowRight className='text-2xl absolute right-4 text-[#FF3811]' /> */}
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
    
};

export default ProductCard;
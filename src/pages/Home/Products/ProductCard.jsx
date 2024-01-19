
import PropTypes from 'prop-types';

const ProductCard = ({product}) => {

    const {title, img, price, ratting} = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="image" className="rounded-xl h-[220px]" />
            </figure>
            <div className="card-body ">
                <p>{ratting}</p>
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                {/* <div className="card-actions ">
                    <button className="btn btn-primary">Buy Now</button>
                    <FaArrowRight className='text-2xl absolute right-4 text-[#FF3811]' />
                </div> */}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.array.isRequired
    
};

export default ProductCard;
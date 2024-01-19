
import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Buy Now</button>
                    <FaArrowRight className='text-2xl absolute right-4 text-[#FF3811]' />
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.array
};

export default ServiceCard;
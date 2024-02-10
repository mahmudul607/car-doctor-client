
import PropTypes from 'prop-types';
import './Car.css'

const Car = (car) => {
    const {name, brand, details, price} =car.car;
    console.log(name)
    return (
        <div className="card car-card card-compact   shadow-xl">
            <figure className='h-2/3 relative p-2'>
                <div className="price-tag w-[150px] h-[50px] text-center top-2 right-0  absolute"><span className='absolute text-white left-1/3 top-2'>$-{price}</span></div>
                <img className='h-full w-full cursor-pointer' src={details.images[0]} alt="Shoes" />
                
                </figure>
            <div className=" h-1/3  rounded-md p-2 relative    flex flex-row   lg:flex-cols-3 buy-btn w-full">
                <div className='lg:flex-grow-auto details lg:w-4/6 '>
                
                <h2 className="card-title">{name}</h2>
                <h1>Brand: {brand}</h1>
                <p>TopSpeed: {details.topSpeed}</p>
                </div>
                <div className="card-actions  relative flex  place-content-center lg:w-1/3 lg:flex-grow-auto">
                    <button className="btn text-white btn-outline ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Car.propTypes = {
    car: PropTypes.object.isRequired,

};

export default Car;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ServiceManage = ({service}) => {
    const {_id,  title, img, price, facility} = service;

    return (
        <div className="card card-side p-4 mb-4 bg-base-100 shadow-xl">
            <figure className='w-2/5'><img src={img} alt="Movie" /></figure>
            <div className="card-body w-3/5">
                <h2 className="card-title text-[#FF3811]">{title}</h2>
                <p className='font-bold'>Price: ${price}</p>
                <p>{facility[0].name}</p>
                <p>{facility[0].details}</p>
                <p className='text-[#FF3811]'>{facility[1].name}</p>
                <p>{facility[2].name}</p>

                <div className="card-actions ">
                    <Link to={`/servicedetails`} className="btn btn-primary">Details</Link>
                    <Link to={`/services/view/${_id}`} className="btn btn-primary"><FaRegEye/></Link>
                    <Link to={`/services/delete/${_id}`} className="btn btn-primary"><RiDeleteBin6Line/></Link>
                </div>
            </div>
        </div>
    );
};

ServiceManage.propTypes = {
    service: PropTypes.object
};

export default ServiceManage;
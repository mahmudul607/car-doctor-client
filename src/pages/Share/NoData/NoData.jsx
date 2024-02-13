
import PropTypes from 'prop-types';
import nodataImg from '../../../assets/404/output-onlinegiftools.gif'

const NoData = ({info}) => {
    return (
        <div className=' w-full min-h-screen'>
            <div className='nodata-img text-center'>
                <img className='w-1/2 h-1/2 p-36 mx-auto shadow-inner ba' src={nodataImg} alt="" />
            <h1 className="text-3xl text-red-600 font-bold">{info}</h1>
           

            </div>
         
        </div>
    );
};

NoData.propTypes = {
    info: PropTypes.string,
    
};

export default NoData;
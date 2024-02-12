
import PropTypes from 'prop-types';
import nodataImg from '../../../assets/404/ePxvZATa5E.gif'

const NoData = ({info}) => {
    return (
        <div className=' w-full min-h-screen'>
            <div className='nodata-img text-center'>
                <img className='w-1/2 h-1/2 p-16 mx-auto shadow-inner' src={nodataImg} alt="" />
            <h1 className="text-3xl text-red-600 font-bold">{info}</h1>
           

            </div>
         
        </div>
    );
};

NoData.propTypes = {
    info: PropTypes.string.isRequired,
    
};

export default NoData;
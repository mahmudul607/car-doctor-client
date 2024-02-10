
import PropTypes from 'prop-types';

const Comple = ({status}) => {
    return (
        <div>
            {
                status === true ? <>
                <p className="text-3xl text-green-600">Your data submitted</p>
           <h1> We are contact with you in 24 hours </h1>
                    </>:<>
           
           <p className="text-3xl text-red-600">Are you sure to submit Message</p>
           
           
                </>
            }
            
           
        </div>
    );
};

Comple.propTypes = {
    
};

Comple.propTypes = {
    status: PropTypes.object,
    
    
};

export default Comple;
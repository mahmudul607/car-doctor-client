import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <div className=' w-full text-center min-h-screen'><div className='mx-auto w-1/2'><span className="loading loading-spinner loading-lg text-center mx-auto"></span></div></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace/>;
};

PrivateRoute.propTypes = {
    
    children: PropTypes.node,
}

export default PrivateRoute;
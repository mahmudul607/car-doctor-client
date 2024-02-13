import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";


const Orders = () => {
    const [order, setOrder] = useState([]);
    const location = useLocation();

   

    if(order.length <= 0) return <Navigate state={location?.pathname}  to={'/nodata'}></Navigate>
    return (
        <div className="min-h-screen">
            <h2>{order}</h2>
        </div>
    );
};

export default Orders;
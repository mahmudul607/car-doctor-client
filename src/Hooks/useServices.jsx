import axios from "axios";
import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        axios.get('https://car-doctor-server-one-gamma-38.vercel.app/services')
        .then(res =>{
            setServices(res.data);
        })
    },[])
    return services;
};

export default useServices;
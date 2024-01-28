import axios from "axios";
import { useEffect, useState } from "react";
import ServiceManage from "./ServiceManage";
import QuickNav from "../Share/QuickNav/QuickNav";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services', { withCredentials: true })
            .then(res => {
                setServices(res.data);
            })
    })

    return (
        <div>
            <div className="text-center text-[#FF3811]">
                <QuickNav
                title={'Service Manager Area'}
                path={'services'}
                ></QuickNav>
            </div>
            <div className="gap-2">
                <h1 className="py-4 text-6xl font-salsa text-center">SERVICES</h1>
            {
                services.map(service => <ServiceManage
                key={service._id}
                service={service}
                ></ServiceManage>)
            }
            </div>
            <div>
                <Link></Link>
            </div>
        </div>
    );
};

export default Services;
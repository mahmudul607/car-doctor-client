import axios from "axios";
import { useEffect, useState } from "react";
import ServiceManage from "./ServiceManage";
import QuickNav from "../Share/QuickNav/QuickNav";
import bgImg from "../../assets/images/checkout/checkout.png"


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('https://car-doctor-server-one-gamma-38.vercel.app/services', { withCredentials: true })
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
                bgImg={bgImg}
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
           
        </div>
    );
};

export default Services;
import { useState } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import QuickSolution from "../QuickSolution/QuickSolution";
import Products from "../Products/Products";
import Team from "../Team/Team";
import OurFeatures from "../OurFeatures/OurFeatures";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="skeleton">
            <Banner></Banner>
            <About></About>
            <div className="mt-4">
                <div className="text-center">
                    <h4 className="font-bold text-[#FF3811] text-4xl  pb-4"><span className="border-b-4 border-dotted   border-cyan-600 w-[30px]">Services</span></h4>
                    <h2 className="text-2xl font-bold ">Our Services Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                    
                </div>
                <div className="text-center pt-6">
                        <Link to={'/services'} className="btn hover:btn-primary bg-[#FF3811]">More Services</Link>
                    </div>

            </div>
            {/* Quick Solution */}
            <QuickSolution></QuickSolution>
            {/* Products section */}

            <Products></Products>
            <Team></Team>
            <OurFeatures></OurFeatures>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;
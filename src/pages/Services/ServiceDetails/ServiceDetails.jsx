import QuickNav from "../../Share/QuickNav/QuickNav";
import serviceImg1 from "../../../assets/images/services/6.jpg"
import { FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import { PiSimCardThin } from "react-icons/pi";
import logo from "../../../assets/logo.svg"
import bgImg from "../../../assets/images/services/1.jpg";
import './ServiceDetails.css'
import useServices from "../../../Hooks/useServices";

const ServiceDetails = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);
    // useEffect(() => {

    //     axios.get('https://car-doctor-server-one-gamma-38.vercel.app/services')
    //         .then(result => {
    //             setServices(result.data);
    //         } )

    // }, [])

    

    return (
        <div>
            <div>
                <QuickNav
                    title={'Service Details'}
                    path={'Services Details'}
                    bgImg={bgImg}
                ></QuickNav>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 p-4 gap-2">
                {/* right section */}
                <div className="lg:col-span-2 md:col-span-2 sm:col-auto  p-4">
                    <div className="grid lg:grid-flow-row-8 md:grid-flow-row-8 sm:grid-flow-row-11 grid-cols-6">
                        <div className="col-span-6 p-4">
                            <img className="border rounded-xl h-72 w-full" src={serviceImg1} alt="images" />
                        </div>
                        <div className="col-span-6 p-4">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold  pb-6">Unique Car Engine Service</h1>
                                <p className="text-left pb-6">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`} </p>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 col-span-6 mr-2">
                            <div className="p-6 customStyle bg-[#f3f3f3] border-t-4 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">Instant Car Services</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className="p-6 customStyle bg-[#f3f3f3] border-t-4 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">Easy Customer Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>

                        </div>
                        <div className="lg:col-span-3 md:col-span-3 col-span-6 ml-2">
                            <div className="p-6 customStyle bg-[#f3f3f3] border-t-4 border-t-[#FF3811] rounded-2xl my-4">
                                <h2 className="text-2xl font-bold">24/7 Quality Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className={`p-6 customStyle bg-[#f3f3f3] border-t-4 border-t-[#FF3811] rounded-2xl my-4`} >
                                <h2 className="text-2xl font-bold">Quality Cost Service</h2>
                                <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="col-span-6 py-4">
                            <p>
                                {` There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `}
                            </p>
                        </div>
                        <div className="col-span-6 py-12 space-y-3">
                            <div>
                                <h1 className="text-2xl font-bold">3 Simple Steps to Process</h1>
                                <p>{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6 text-center space-y-4 p-12">

                            <div className="h-[40px] w-[40px] rounded-full bg-[#FF3811]  justify-center flex items-center mx-auto">
                                <p className="text-white font-bold">01</p>
                            </div>

                            <div>
                                <h2 className="font-bold">STEP ONE</h2>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6 text-center space-y-4 p-12">

                            <div className="h-[40px] w-[40px] rounded-full bg-[#FF3811]  justify-center flex items-center mx-auto">
                                <p className="text-white font-bold">02</p>
                            </div>

                            <div>
                                <h2 className="font-bold">STEP TWO</h2>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-2 col-span-6 text-center space-y-4 p-12">

                            <div className="h-[40px] w-[40px] rounded-full bg-[#FF3811]  justify-center flex items-center mx-auto">
                                <p className="text-white font-bold">03</p>
                            </div>

                            <div>
                                <h2 className="font-bold">STEP THREE</h2>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>



                        <div className="col-span-6">
                            <ReactPlayer url='https://www.youtube.com/watch?v=siACuIcNikE' controls />
                        </div>

                    </div>

                </div>
                {/*start left section*/}
                <div className="lg:col-span-1 md:col-span-1 sm:col-auto p-2">
                    <div>
                        <h1 className="text-2xl font-bold p-6">Services</h1>
                        {services ? (
                            services.map((ser) => (
                                <div
                                    className="hover:bg-[#FF3811]  hover:text-white flex justify-between h-10 align-middle items-center p-6 rounded-sm"
                                    key={ser._id}
                                    
                                    
                                >
                                    <p>{ser.title}</p>
                                    <FaArrowRight className="" />
                                </div>
                            ))
                        ) : null}
                    </div>
                    <div className="bg-black text-white rounded-lg mt-8 bg-style" >
                        <h2 className="text-2xl font-extrabold p-6">Download</h2>
                        <div className="grid grid-cols-4 mx-4 p-4 place-items-center">
                            <PiSimCardThin className="text-2xl col-span-1" />
                            <p className="text-left col-span-2 pr-2"><span>Our Brochure</span> <br />Download</p>
                            <FaArrowRight className="bg-[#FF3811] rounded-lg h-10 w-12 p-2 col-span-1" />
                        </div>
                        <div className="grid grid-cols-4 mx-4 p-4 place-items-center">
                            <PiSimCardThin className="text-2xl col-span-1" />
                            <p className="text-left col-span-2 pl-2"><span>Company Details</span> <br />Download</p>
                            <FaArrowRight className="bg-[#FF3811] rounded-lg h-10 w-12 p-2 col-span-1" />
                        </div>

                    </div>

                    {/* offer */}
                    <div className="bg-black text-white text-center mt-12 p-4 pb-20 rounded-xl">
                        <div className="">
                            <img className="mx-auto p-4 text-white" src={logo} alt="" />
                            <h1>Car Doctor</h1>
                            <p>Need Help? We Are Here<br/>
                                To Help You</p>
                        </div>
                        <div className="relative">
                            <div className="bg-white h-36 w-90 text-black rounded-xl">
                                <p className="text-2xl p-4 font-bold"><span className="text-[#FF3811]">Car Doctor</span> Special<br/>Save up to <span className="text-[#FF3811]">60% off</span></p>

                            </div>
                            <button className="btn bg-[#FF3811] hover:btn-primary absolute bottom-[-20px] right-1/3">Get A Quote</button>
                        </div>
                    </div>
                    <div className="p-8 text-center space-y-6">
                        <h1 className="text-3xl font-bold">Price $250.00</h1>
                        <button className="btn bg-[#FF3811] hover:btn-primary">Proceed Checkout</button>
                    </div>
                </div>
                {/* end Left section */}

            </div>
        </div>
    );
};

export default ServiceDetails;
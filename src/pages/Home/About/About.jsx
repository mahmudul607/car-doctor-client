
import person from "../../../assets//images/about_us/person.jpg";
import parts from "../../../assets//images/about_us/parts.jpg";
import SwiperComponent from "./SwiperComponent/SwiperComponent";
import { Link, useLocation } from "react-router-dom";
import QuickNav from "../../Share/QuickNav/QuickNav";
import bgImg from "../../../assets/images/cars/about-banner.jpg"
import Contact from "../../Contact/Contact";
import './About.css';
import img1 from "../../../assets/images/bg-lebel/services-icon-01.svg";
import img2 from "../../../assets/images/bg-lebel/services-icon-02.svg";
import img3 from "../../../assets/images/bg-lebel/services-icon-03.svg";
import { Carousel } from "react-responsive-carousel";
import SectionHeader from "../../Share/SectionHeader/SectionHeader";
import bxSelection from "../../../assets/bx-selection.svg"
import bxCrown from "../../../assets/bx-user-check.svg"
import bxMan from "../../../assets/bx-user-check.svg"

const About = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div >
            {location?.pathname === '/about' ?
                <QuickNav
                    title={'ABOUT US'}
                    path={'about'}
                    bgImg={bgImg}
                ></QuickNav> : null
            }
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">

                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-4/5 rounded-lg  h-full" />
                        <img src={parts} alt="" className="w-3/5 rounded-xl border-white absolute top-1/2 right-4 border-8" />
                    </div>
                    <div className="lg:w-1/2 space-y-2">
                        {location?.pathname !== '/about' ?
                            <p className="font-bold text-[#FF3811] text-2xl">About Us</p> : null
                        }
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        {
                            location?.pathname !== '/about' ?
                                <Link to={'/about'} className="btn btn-primary bg-[#FF3811]">Get More Info</Link> : null
                        }
                    </div>
                </div>

            </div>

            {/* start */}
            {
                location?.pathname !== '/about' ?

                    <div className="lg:h-[300px] md:h-[300px] w-full bg-slate-500 lg:grid md:grid grid-cols-4 mt-16 rounded-md">
                        <div className="lg:col-span-3 md:col-span-2  text-center pt-12 font-salsa">
                            <h4 className="text-6xl">Coming Soon</h4>
                            <p>Our New Product is coming with new Experience</p>
                        </div>
                        <div className="h-[260px] lg:col-span-1 md:col-span-2 rounded-lg  m-4 justify-center flex">
                            <div className="h-[250px] w-[250px] p-6 ">
                                <SwiperComponent></SwiperComponent>

                            </div>

                        </div>

                    </div> : null
            }
            {/* End Swiper */}

            <div className="py-12 bg-base-200 grid lg:grid-cols-3 md:grid-cols-3 ms:grid-cols-2">
                <div className="icon-items flex flex-col text-center items-center gap-4 p-6 hover:bg-gray-600 rounded-badge">
                    <div className=" border-2 rounded-full p-2 border-dashed border-[#FF3811]">
                        <div className="circle-img border bg-[#a05f5f]">
                            <img className="p-2" src={img1} alt="" />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">Find Location</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a fugit soluta perferendis illo nihil, eveniet ipsam ex facilis earum omnis maiores officia</p>
                    </div>
                </div>
                <div className="icon-items flex flex-col text-center items-center gap-4 p-6 hover:bg-gray-600 rounded-badge">
                    <div className=" border-2 rounded-full p-2 border-dashed  border-[#FF3811]">
                        <div className="circle-img border bg-[#fe9307]">
                            <img className="p-2" src={img2} alt="" />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">Find Location</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a fugit soluta perferendis illo nihil, eveniet ipsam ex facilis earum omnis maiores officia</p>
                    </div>
                </div>
                <div className="icon-items flex flex-col text-center items-center gap-4 p-6 hover:bg-gray-600 rounded-badge">
                    <div className=" border-2 rounded-full p-2 border-dashed border-[#FF3811]">
                        <div className="circle-img border bg-[#7480ff] ">
                            <img className="p-2" src={img3} alt="" />
                        </div>

                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">Find Location</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a fugit soluta perferendis illo nihil, eveniet ipsam ex facilis earum omnis maiores officia</p>
                    </div>
                </div>

            </div>

            {
                location?.pathname === '/about' ?

                    <div className="container mx-auto my-8">
                        <h1 className="text-4xl font-bold mb-4">About Our Car Services</h1>

                        <p className="mb-4">
                            Welcome to our Car Services website! We are dedicated to providing top-notch car repair, maintenance, and
                            customization services to ensure your vehicle runs smoothly on the road.
                        </p>

                        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                        <p className="mb-4">
                            Our mission is to deliver high-quality and reliable car services to our customers. Whether you need routine
                            maintenance, major repairs, or car customization, our team of skilled professionals is here to meet your
                            automotive needs.
                        </p>

                        <h2 className="text-2xl font-bold mb-2">Services We Offer</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Engine diagnostics and repair</li>
                            <li>Oil changes and fluid checks</li>
                            <li>Brake system inspection and repair</li>
                            <li>Transmission services</li>
                            <li>Wheel alignment and tire services</li>
                            <li>Custom car modifications</li>
                            {/* Add more services as needed */}
                        </ul>

                        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
                        <p className="mb-4">
                            We have a dedicated team of experienced and certified automotive technicians who are passionate about cars and
                            committed to providing excellent service. Your satisfaction and the well-being of your vehicle are our top
                            priorities.
                        </p>

                        <h2 className="text-2xl font-bold mb-2">Facility Highlights</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>State-of-the-art diagnostic equipment</li>
                            <li>Comfortable waiting area with complimentary refreshments</li>
                            <li>Skilled and friendly staff</li>
                            <li>Environmentally friendly practices</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-2">Why Choose Us</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Experienced and certified technicians</li>
                            <li>State-of-the-art facilities</li>
                            <li>Commitment to customer satisfaction</li>
                            <li>Transparent and fair pricing</li>
                            {/* Add more reasons as needed */}
                        </ul>
 {/* why choose us */}
                        <div>
                            <div>
                            <SectionHeader title={'Why Choose Us'} para1={'we are one of the best option for you in the service and sell section with car'}></SectionHeader>
                            </div>
                            <div>
                                <div className="card">
                                    <div className="card-title">
                                        <div>
                                            <img src={bxSelection} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body"></div>

                                </div>
                                <div className="card">
                                    <div className="card-title">
                                        <div>
                                            <img src={bxCrown} alt="" />
                                        </div>
                                    </div>
                                    <div className="card-body"></div>

                                </div>

                            </div>
                        </div>
{/* end why choose us */}

{/* testimonial carousel */}
                        <div className=" w-full testimonial-carousel">
                            <div className="text-center py-6 text-white">
                                <h1 className="font-salsa testimonial-title text-4xl">What People say about us?</h1>
                                <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                            </div>

                            <Carousel showThumbs={false} emulateTouch={true} className="" showStatus={false}>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                <div className="border p-4 rounded-md bg-base-200 cursor-pointer ">
                                    <div className="text-left space-y-4">
                                        <div className="flex gap-4">
                                            <div className="avatar flex">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                                                </div>


                                            </div>
                                            <div>
                                                <p className="font-bold text-3xl">- John D.</p>
                                                <p>From Bangladesh</p>
                                            </div>
                                        </div>


                                        <p className="italic mb-2">Excellent service and knowledgeable staff! My car runs better than ever.</p>
                                        <p className="font-bold">- John D.</p>
                                    </div>
                                </div>
                                {/* Example Testimonial 1 */}
                                

                            </Carousel>

                        </div>
{/* end testimonial carousel */}
{/* start contact section */}
                        <div className="mt-8">

                            <div>
                                <Contact></Contact>
                            </div>
                           
                        </div>
{/* end contact section */}
                    </div> : null
            }
            {/* end */}
        </div>
    );
};

export default About;

import person from "../../../assets//images/about_us/person.jpg";
import parts from "../../../assets//images/about_us/parts.jpg";
import SwiperComponent from "./SwiperComponent/SwiperComponent";

const About = () => {

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-4/5 rounded-lg  h-full" />
                        <img src={parts} alt="" className="w-3/5 rounded-xl border-white absolute top-1/2 right-4 border-8" />
                    </div>
                    <div className="lg:w-1/2 space-y-2">
                        <p className="font-bold text-[#FF3811]">About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary bg-[#FF3811]">Get More Info</button>
                    </div>
                </div>

            </div>

            {/* staart */}
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

            </div>
            {/* end */}
        </>
    );
};

export default About;

import person from "../../../assets//images/about_us/person.jpg";
import parts from "../../../assets//images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                <img src={person} className="w-4/5 rounded-lg  h-full" />
                <img src={parts} alt=""  className="w-3/5 rounded-xl border-white absolute top-1/2 right-4 border-8"/>
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
    );
};

export default About;
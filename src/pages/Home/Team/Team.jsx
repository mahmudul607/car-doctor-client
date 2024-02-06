import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
const Team = () => {
    return (
        <div className="my-6">
            <div className="text-center">
                <h4 className="font-bold text-[#FF3811] text-4xl">Team</h4>
                <h2 className="text-2xl font-bold text-black">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="image" className="rounded-xl h-[220px]" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions ">
                            <FaFacebookF className="w-[30px] h-[30px] p-2 bg-[#395185] text-white rounded-full" />
                            <FaTwitter className="w-[30px] h-[30px] p-2 bg-[#55ACEE] text-white rounded-full" />
                            <FaInstagram className="w-[30px] h-[30px] p-2 bg-[#774ADF] text-white rounded-full" />
                            <FaLinkedinIn className="w-[30px] h-[30px] p-2 bg-[#0A66C2] text-white rounded-full" />

                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="image" className="rounded-xl h-[220px]" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions ">
                            <FaFacebookF className="w-[30px] h-[30px] p-2 bg-[#395185] text-white rounded-full" />
                            <FaTwitter className="w-[30px] h-[30px] p-2 bg-[#55ACEE] text-white rounded-full" />
                            <FaInstagram className="w-[30px] h-[30px] p-2 bg-[#774ADF] text-white rounded-full" />
                            <FaLinkedinIn className="w-[30px] h-[30px] p-2 bg-[#0A66C2] text-white rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="image" className="rounded-xl h-[220px]" />
                    </figure>
                    <div className="card-body text-center items-center">

                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions ">
                            <FaFacebookF className="w-[30px] h-[30px] p-2 bg-[#395185] text-white rounded-full" />
                            <FaTwitter className="w-[30px] h-[30px] p-2 bg-[#55ACEE] text-white rounded-full" />
                            <FaInstagram className="w-[30px] h-[30px] p-2 bg-[#774ADF] text-white rounded-full" />
                            <FaLinkedinIn className="w-[30px] h-[30px] p-2 bg-[#0A66C2] text-white rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
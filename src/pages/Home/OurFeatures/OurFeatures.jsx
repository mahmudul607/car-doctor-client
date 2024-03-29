
import { FaPeopleRoof } from "react-icons/fa6";
import { MdOutlineWatchLater, MdSupportAgent, MdOutlineSecurity   } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const OurFeatures = () => {
    return (
        <div className="my-6">
            <div className="text-center">
                <h4 className="font-bold text-[#FF3811] text-4xl">Core Features</h4>
                <h2 className="text-2xl font-bold ">Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className="lg:flex md:grid sm:grid md:grid-cols-3 sm:grid-cols-2 mt-6 lg:gap-2">
                {/* one */}
                <div className="card  bg-white  shadow-xl w-full col-auto text-black hover:bg-[#FF3811] hover:text-white">
                    <figure className="px-6 pt-10 text-[2rem]   ">
                        <FaPeopleRoof className="rounded-xl  " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold">Expert Team!</h2>
                    </div>
                </div>
                {/* two */}
                <div className="card   shadow-xl w-full text-white bg-[#FF3811] hover:text-black hover:bg-white col-auto">
                    <figure className="px-10 pt-10 text-[2rem] ">
                        <MdOutlineWatchLater className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold ">Delivery Timely!</h2>
                    </div>
                </div>
                {/* three */}
                <div className="card  bg-white shadow-xl w-full col-auto text-black hover:bg-[#FF3811] hover:text-white">
                    <figure className="px-10 pt-10 text-[2rem] ">
                        <MdSupportAgent className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold">24/7 Support!</h2>
                    </div>
                </div>
                {/* four */}
                <div className="card  bg-white shadow-xl w-full col-auto text-black hover:bg-[#FF3811] hover:text-white">
                    <figure className="px-10 pt-10 text-[2rem] ">
                        <GiAutoRepair className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold">Best Equipments!</h2>
                    </div>
                </div>
                {/* five */}
                <div className="card  bg-white shadow-xl w-full col-auto text-black hover:bg-[#FF3811] hover:text-white">
                    <figure className="px-10 pt-10 text-[2rem] ">
                        <MdOutlineSecurity  className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold">100% Guaranty!</h2>
                    </div>
                </div>
                {/* six */}
                <div className="card  bg-white shadow-xl w-full col-auto text-black hover:bg-[#FF3811] hover:text-white">
                    <figure className="px-10 pt-10 text-[2rem] ">
                        <TbTruckDelivery className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-sm font-bold">Quick Delivery!</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurFeatures;
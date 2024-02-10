
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineAddIcCall, MdLocationPin  } from "react-icons/md";
import './QuickSolution.css'
const QuickSolution = () => {
    return (
        <div className="mt-6 p-8 qsolution-card-bg bg-black text-white rounded-lg mx-6">
            {/* <h4 className="text-center p-4">Quick Solution</h4> */}
            <div className="grid lg:grid-cols-3 p-6">
                <div className="shedule text-left flex items-center">
                    <LuCalendarClock className="text-3xl m-2 text-[#FF3811]"/>
                    <div className="text">
                        <p>We are open monday-friday</p>
                        <h1 className="font-bold">7:00 AM - 9:00 PM</h1>
                    </div>
                </div>
                <div className="question text-left flex items-center">
                    <MdOutlineAddIcCall className="text-3xl m-2 text-[#FF3811]"/>
                <div className="">
                        <p>Have a question?</p>
                        <h1 className="font-bold ">+88011111111111</h1>
                    </div>
                </div>
                <div className="address text-left flex items-center">
                    <MdLocationPin  className="text-3xl m-2 text-[#FF3811]"/>
                <div className="text">
                        <p>Need a service? Our Address</p>
                        <h1 className="font-bold ">Uttara-model-town, sector-13</h1>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default QuickSolution;
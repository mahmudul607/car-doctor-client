import { Link } from "react-router-dom";
import img from "../../../assets/images/checkout/checkout.png";
import navImg from "../../../assets/images/quickpath.png";

const QuickNav = () => {
    return (
        <div className=" w-full quickNav">
            <div className="h-[300px] relative flex justify-center text-white">
                <img src={img} alt="img" />
                <div className="absolute flex  bottom-0 w-1/5 justify-center">

                    <img src={navImg} alt="" />
                    <div className="absolute flex gap-2 bottom-1">
                        <Link to={'/'}>Home /</Link>
                        <Link >CheckOut</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default QuickNav;
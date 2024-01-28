import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import navImg from "../../../assets/images/quickpath.png";
import './QuickNav.css'

const QuickNav = ({path, title}) => {
    return (
        <div className=" w-full quickNav">
            <div className="quick-nav h-[300px] rounded relative flex justify-center text-white">
                <h1 className="mt-4 h-16 p-2 text-6xl font-bold text-white font-salsa rounded-lg bg-black/[.55]">{title}</h1>
                {/* <img src={img} alt="img" /> */}
                <div className="absolute flex  bottom-0 w-1/5 justify-center">

                    <img src={navImg} alt="" />
                    <div className="absolute flex gap-2 bottom-1">
                        <Link className="font-extrabold hover:text-black" to={'/'}>Home <span className="text-white">/</span></Link>
                        <Link className="text-black font-bold">{path}</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
QuickNav.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
};
export default QuickNav;
import { Outlet } from "react-router-dom";
import Footer from "../pages/Share/Footer/Footer";
import NavBar from "../pages/Share/NavBar/NavBar";
import DarkMod from "../DarkMod/DarkMod";
import './Main.css'






const Main = () => {
    
    
   
    return (
    <DarkMod>
      <div className="main-section">
        <div  className='lg:w-5/6 md:w-5/6 mx-auto' >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       
        </div>
        </DarkMod>
    );
};

export default Main;
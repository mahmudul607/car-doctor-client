import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/finallogo.png';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import logo1 from "../../../assets/images/logo.PNG";



const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [tabActive, setTabActive] = useState('');
  const location = useLocation();
  const navigate = useNavigate();


console.log(user)
  
  const [tabsArray, setTabsArray] = useState([]);

 
useEffect(()=>{

  const tabs = ['', 'shop', 'services', 'blog', 'about'];
  if(location){
    setTabActive((location.pathname).slice(1))
    
  }
  setTabsArray(tabs);

  if(user){
    const userAccess = 'orders'
  
    const newTabs = [...tabs, userAccess]

  setTabsArray(newTabs);
  
  
  }
},[user, location])
 


  const handleTabs = (tabIndex) => {
    
    setTabActive(tabIndex)


  }


  const navItems = <>

    {/* <li> <Link to={'/'}>Home</Link> </li>
    <li> <Link to={'/shop'}>Shop</Link> </li>
    <li> <Link to={'/services'}>Service</Link> </li>
    <li> <Link to={'/blog'}>Blog</Link> </li> */}

    {/* when admin and local user is divided then modify this route */}
    {/* {
      user.admin&& <li> <Link to={'/orders'}>Orders</Link></li>
    } */}

    {/* {
      <li> <Link to={'/orders'}>Orders</Link></li>
    }
    <li> <Link to={'/about'}>About</Link> </li>
    <li> <Link to={'/contact'}>Contact</Link> </li> */}
    <div role="tablist" className="tabs tabs-lifted">
      {
        tabsArray.map((tabIndex) => <Link
          role="tab"
          to={`/${tabIndex}`}
          key={tabIndex}
          className={`tab ${(tabActive === tabIndex) ? 'tab-active' : ''}`}
          onClick={() => handleTabs(tabIndex)}
        >{tabIndex === ''? 'Home' : tabIndex[0].toUpperCase(tabIndex) + tabIndex.slice(1)}

        </Link>)
      }


    </div>


  </>

  const handleLogOut = () => {
    logOut();
    navigate('/login')
  }


  return (
    <div className="navbar bg-base-100  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-2xl">
          <img className="w-full h-full text-2xl" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="gap-6 flex mx-4">
          <Link className="text-[#FF3811]"><FaShoppingCart /></Link>
          <Link className="text-[#FF3811]"><FaSearch /></Link>
        </div>
        <button className="btn btn-outline  text-[#FF3811]">Appointment</button>
        {
          (user ? <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user.displayName}

                </a>
              </li>
              <li>
                <a className="justify-between">

                  {user.email}

                </a>
              </li>
              <li>


                {
                  user && <Link to={'/bookings'}>My Bookings</Link>
                }


              </li>
              <li><a>Settings</a></li>
              <li onClick={handleLogOut}><a>Logout</a></li>
            </ul>
          </div> : <Link className="text-[#FF3811] font-bold ml-2" to={'/login'}>Login</Link>)
        }

      </div>
    </div>
  );
};

export default NavBar;
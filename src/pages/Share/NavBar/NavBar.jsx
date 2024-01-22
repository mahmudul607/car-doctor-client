import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user)
  const navItems = <>
    <li> <Link to={'/'}>Home</Link> </li>
    <li> <Link to={'/about'}>About</Link> </li>
    <li> <Link to={'/service'}>Service</Link> </li>
    <li> <Link to={'/blog'}>Blog</Link> </li>
    {
      user &&  <li> <Link to={'/bookings'}>Bookings</Link> </li>
    }
    <li> <Link to={'/contact'}>Contact</Link> </li>


  </>

  const handleLogOut = () => {
      logOut();
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to={'/home'} className="btn btn-ghost text-xl">
          <img className="w-full h-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="gap-6 flex mx-4">
          <Link><FaShoppingCart /></Link>
          <Link><FaSearch /></Link>
        </div>
        <button className="btn btn-outline btn-secondary">Appointment</button>
        {
          (user?  <div className="dropdown dropdown-end">
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
            <li><a>Settings</a></li>
            <li onClick={handleLogOut}><a>Logout</a></li>
          </ul>
        </div>:<Link to={'/login'}>Login</Link>)
        }
      </div>
    </div>
  );
};

export default NavBar;
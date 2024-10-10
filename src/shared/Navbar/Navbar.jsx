import { Link, NavLink } from "react-router-dom";
import profileDefaultPic from '../../../src/assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log('user in navbar', user)
  const handleSignOut = (e) => {
    e.preventDefault();
    logOut()
      .then()
      .catch()
  }
  const navlinks = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/update"}>Update Profile</NavLink></li>
    <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
    <li><NavLink to={"/register"}>Register</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow">
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Real Estate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" title={user?.displayName ? user.displayName : ''}>
          <div className="w-10 rounded-full">
            <img
              alt="User"
              src={user?.photoURL ? user.photoURL : profileDefaultPic} />
          </div>
        </div>
        {
          user ?
            <Link onClick={handleSignOut}><button className="btn btn-sm">Log Out</button></Link>
            : <Link to={"/login"}><button className="btn btn-sm">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
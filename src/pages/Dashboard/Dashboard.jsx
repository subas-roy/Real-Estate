import { useContext } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import profileDefaultPic from '../../../src/assets/user.png'
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Real Estate | Dashboard</title>
      </Helmet>
      <Navbar/>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-w-6xl mx-auto">
        <div className="col-span-1 bg-[#1D293E] h-screen text-white">
          <div className="flex justify-center mt-6">
            <img className="rounded-full" width="90px" src={user.photoURL ? user.photoURL : profileDefaultPic} alt="" />
          </div>
          <p className="text-center text-2xl mt-4 mb-10">{user?.displayName ? user.displayName : 'Anonymous'}</p>
          <ul>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block bg-[#172133]">Dashboard</NavLink></li>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block">My Properties</NavLink></li>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block">Payments</NavLink></li>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block">Invoices</NavLink></li>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block">Change Password</NavLink></li>
            <li><NavLink className="px-4 py-2 hover:bg-[#172133] block">Log Out</NavLink></li>
          </ul>
        </div>
        <div className="lg:col-span-4 md:col-span-3 sm:col-span-2 lg:pl-24 bg-[#F5F7FB]">
          <div className="p-4 bg-white text-white">
            <h2 className="text-lg text-[#532222] mb-4 font-semibold">Manage Dashboard</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-20 bg-[#1EC38B] rounded-md p-4">
                <p>Published Property</p>
              </div>
              <div className="h-20 bg-[#FF9911] rounded-md p-4">
                <p>Total Reviews</p>
              </div>
              <div className="h-20 bg-[#66AAEE] rounded-md p-4">
                <p>Messeges</p>
              </div>
              <div className="h-20 bg-[#F91942] rounded-md p-4">
                <p>Times Bookmarked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
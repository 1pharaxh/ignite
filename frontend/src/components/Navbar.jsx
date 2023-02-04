import React, { useCallback } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import college from '../static/logos/logo_college.png';
import ignite from '../static/logos/logo_ignite.png';
import NavBarTabs from "./NavBarTabs";
function Button({ text, bg }) {
  return (
    <div>
      <div className={
        `cursor-pointer text-teal-700 border-2 border-teal-700 px-4 py-4 rounded-md ${bg || `bg-white`}`}>
        <span>{text}</span>
      </div>
    </div>
  );
}


function Navbar() {
  // This is the hook that we will use to get the current location (URL parameters)
  // To highlight the current page in the navbar
  const location = useLocation();

  // This is to manually invoke a link
  const navigate = useNavigate();
  const handleClick = useCallback(() => { navigate('/') }, [navigate]);
  return (
    <div className="z-10 fixed px-5 left-0 right-0 top-0 h-20 shadow-md border-b-2 border-gray-100 bg-white">
      <nav className="flex items-center container mx-auto h-full justify-between">
        {/* <h1 className="font-semibold uppercase text-lg text-gray-200">
          🔄 Demo App
        </h1> */}
        <div onClick={handleClick} className="flex cursor-pointer">
          <img src={college} alt="logo" className="h-16 px-5" />
          <img src={ignite} alt="logo" className="h-16 " />
        </div>
        <div>
          <ul className="flex items-center space-x-2 text-md mr-10">
            <NavBarTabs text="Home" link="/" bg={location.pathname == '/' ? 'bg-teal-700 text-white' : 'bg-white'} />
            <NavBarTabs text="About" link="/about" bg={location.pathname == '/about' ? 'bg-teal-700 text-white' : 'bg-white'} />
            <NavBarTabs text="Companies" link="/companies" bg={location.pathname.includes("compan") ? 'bg-teal-700 text-white' : 'bg-white'} />
            <NavBarTabs text="How to Apply" link="/how-to-apply" bg={location.pathname == '/how-to-apply' ? 'bg-teal-700 text-white' : 'bg-white'} />
            <NavBarTabs text="Resources" link="/resources" bg={location.pathname == '/resources' ? 'bg-teal-700 text-white' : 'bg-white'} />
            <NavBarTabs text="Contact Us" link="/contact-us" bg={location.pathname == '/contact-us' ? 'bg-teal-700 text-white' : 'bg-white'} />

            <Button text="Login / Signup" bg="bg-white" />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

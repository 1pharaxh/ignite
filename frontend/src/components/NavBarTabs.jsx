import React from "react";
import { Link } from 'react-router-dom';
function NavBarTabs({ text, link, bg }) {
    return (
        <li>
            <Link to={link} className={`
            rounded-md mr-2 px-4 py-4
            ${bg || `bg-white text-black`}
             hover:text-white hover:bg-teal-500`}>{text}</Link>
        </li>
    )
}
export default NavBarTabs;
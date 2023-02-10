import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function NavBarTabs({ text, link, bg }) {
    return (
        <li>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Link to={link} className={`
            rounded-md mr-2 px-4 py-4
            ${bg || `bg-white text-black`}
             hover:text-white hover:bg-teal-500`}>{text}</Link>
            </motion.button>
        </li>
    )
}
export default NavBarTabs;
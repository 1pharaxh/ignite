import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function NavBarTabs({ text, link, bg }) {
    const navigate = useNavigate();

    return (
        <li className="my-3 flex">
            <motion.button
                className={`cursor-pointer flex-1 ${bg || `bg-slate-100 text-black`} rounded-md px-4 py-4 hover:text-white hover:bg-teal-500`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(link)}
            > {text}
            </motion.button>
        </li>
    )
}
export default NavBarTabs;
'use client'
import Link from "next/link";
import React  from "react";
import { useState } from 'react';

function Header() {
    const [activeTab, setActiveTab] = useState("home");
    return (
        <div className="bg-white py-4 shadow-md px-8 flex justify-between">
            <span className="mt-2 ml-5">
                <img width="60" height="60" src="logo_college.png" className="mr-4 inline-block" />
                <img width="60" height="60" src="logo_ignite.png" className="inline-block" />
            </span>
            <span className="my-5 mr-5 ">
                <Link href="/" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'home' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("home")}> Home </Link>
                <Link href="/about" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'about' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("about")}> About Us </Link>
                <Link href="/companies" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'companies' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("companies")}> Companies </Link>
                <Link href="/how-to-apply" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'how-to-apply' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("how-to-apply")}> How to Apply </Link>
                <Link href="/resources" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'resources' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("resources")}> Resources </Link>
                <Link href="/contact-us" className={`mr-2 px-4 py-4 rounded-md ${activeTab === 'contact-us' ? 'bg-teal-700 text-white' : 'text-black'}`} onClick={() => setActiveTab("contact-us")}> Contact Us </Link>
                <Link href="/login" className="text-teal-700 border-2 border-teal-700 px-4 py-4 rounded-md bg-white"> Login / Signup </Link>
            </span>
        </div>
    );
}

export default Header;


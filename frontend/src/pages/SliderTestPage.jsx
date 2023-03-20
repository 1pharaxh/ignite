import React, { useState } from "react";


export default function SliderTestPage() {
    let items = [];
    for (let i = 0; i < 150; i++) {
        items.push(i);
    }
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const pagesCount = Math.ceil(items.length / itemsPerPage);
    let pagination = [];

    if (pagesCount <= 3) {
        pagination = Array.from({ length: pagesCount }, (_, i) => i + 1);
    } else if (currentPage === 1 || currentPage === 2) {
        pagination = [1, 2, 3];
    } else if (currentPage === pagesCount || currentPage === pagesCount - 1) {
        pagination = [pagesCount - 2, pagesCount - 1, pagesCount];
    } else {
        pagination = [currentPage - 1, currentPage, currentPage + 1];
    }
    const handleClick = (e, index) => {
        e.preventDefault();
        if (index !== currentPage && index > 0 && index <= pagesCount) {
            setCurrentPage(index);
        }
    };

    const renderItems = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Check if on last page
        if (currentPage === pagesCount) {
            return items.slice(start).map((number) => (
                <li key={number}>{number + 1}</li>
            ));
        } else {
            return items.slice(start, end).map((number) => (
                <li key={number}>{number + 1}</li>
            ));
        }
    };
    return (
        <div className="md:mt-20 mt-[65px] flex flex-col relative h-full w-full items-center">
            <h1 className='font-bold md:text-4xl text-3xl text-teal-600'>Pagin<span className='text-black'>ation</span></h1>
            <ul className="flex flex-row gap-10">
                {renderItems()}
            </ul>
            <ul className="flex flex-row gap-2 ">
                <svg
                    className="w-6 h-6 cursor-pointer m-auto text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => handleClick(e, currentPage - 1)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                {pagination.map((number) => (
                    <li
                        onClick={(e) => handleClick(e, number)}
                        key={number} className={` h-[50px] w-[50px] border-solid border-2  cursor-pointer flex flex-row items-center justify-center  rounded-lg 
                        ${currentPage === number ? "border-teal-500  font-bold text-teal-600" : "bg-teal-400 text-white font-semibold"}`}>
                        <a className="my-auto" href="/" >{number}</a>
                    </li>
                ))}
                <svg
                    className="w-6 h-6 cursor-pointer m-auto text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => handleClick(e, currentPage + 1)}
                >
                    <path

                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </ul>
        </div>
    );
}

import React, { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SliderTestPage() {
    const MySwal = withReactContent(Swal)
    const [errorString, setErrorString] = useState("<h1> ● Please Login to apply</h1><h1> ● Please select a Job!</h1><h1> ● Already applied!</h1><h1> ● Missing resume</h1>")

    const clickHandler = () => {
        MySwal.fire({
            icon: "error",
            title: 'Error!',
            html: "<div class='flex flex-col items-start gap-2 font-bold text-xl text-red-500'>"
                + errorString
                + "</div>",
            confirmButtonColor: '#0D9488',
            confirmButtonText: 'Cool'

        })
        { console.log(errorString) }
    }
    return (
        <div className="md:mt-20 mt-[65px] flex flex-col relative h-full w-full items-center py-10">
            <h1 className='font-bold md:text-4xl text-3xl text-teal-600'>Pagin<span className='text-black'>ation</span></h1>
            <button onClick={clickHandler} className='bg-teal-600 text-white font-bold py-2 px-4 rounded-full mt-10 hover:bg-teal-300'>Click me</button>
        </div>
    );
}



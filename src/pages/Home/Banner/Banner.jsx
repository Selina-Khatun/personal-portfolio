import React from 'react';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img4 from '../../../assets/developer.png'

AOS.init({ duration: 1000 });
const Banner = () => {
    return (


        <div className="hero  min-h-screen rounded-xl mb-[5%]  justify-start items-center pl-10">

            {/* <div className="overlay bg-opacity-60"></div> */}
            <div data-aos="zoom-in-up" className=" flex lg:flex-row flex-col hero-content  text-neutral-content">
               <div className=' mt-[25%]'>
               <h1 className='animate-bounce'>Web</h1>
               <img className='w-[50%] mt-[10%] py-5 animate-bounce bg-slate-500' src={img4} alt="" />
               
               </div>
                <div className="max-w-2xl pl-10  " >
                    <h1 
                         className="mb-5 text-5xl font-bold">Hello,<br /> I AM <br /><span className=' antialiased animate-pulse' >SElINA KHATUN</span></h1>
                    <p className="mb-5">I create stylish and user-friendly websites using HTML, <br />CSS, JavaScript, and React, turning designs into seamless digital experiences.</p>
                    <button class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                        <span class="relative w-full uppercase text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">contact me</span>
                        <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
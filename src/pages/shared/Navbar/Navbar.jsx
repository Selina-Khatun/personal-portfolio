import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import img1 from '../../../assets/icons8-menu.svg'
import Theme from '../../../component/Theme/Theme';
import { Link } from 'react-router-dom';
const Navbar = () => {


    return (
        <div >


            <div className=" max-w-7xl py-4 z-10  mx-auto lg:fixed  navbar bg-base-100 ">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} className="btn  hover:scale-150 ">
                            <img src={img1} alt="" />

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='active:text-red-500 hover:text-sky-500'><a>Homepage</a></li>
                            <li><a>Projects</a></li>
                            <li><a>About</a></li>
                            <li><a>Service</a></li>
                            <li><a>contact</a></li>
                        </ul>
                    </div>


                </div>

                <div className="navbar-end">
                    <Link to="https://drive.google.com/file/d/1KmcXWXFqIlgZFBN1sNPM8Yt88xQCt9hJ/view?usp=sharing" target="_blank" download>
                        <button  class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-[#0a5ba5] hover:text-white hover:text-xl bg-slate-200 rounded-lg group">
                            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0a5ba5] rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                            <span class="relative ">Download CV</span>
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
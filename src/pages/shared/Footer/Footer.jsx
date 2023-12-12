import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>

            <footer className="footer footer-center p-10 bg-[#102940] bg-gradient-to-b from-[#0c4f8d] to-[#111d27] text-white rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About me</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link className='text-2xl text-red-500 hover:scale-150' to={`https://www.youtube.com/c/learn%20with%20seli`} >
                            <FaYoutube /></Link>
                        <Link className='text-2xl text-blue-500 hover:scale-150' to={`https://www.facebook.com/sada.megh.94402`} >
                            <FaFacebookSquare />
                        </Link>
                        <Link className='text-2xl text-white hover:scale-150' to={`https://github.com/Selina-Khatun`} >
                        <FaGithub />
                        </Link>
                        <Link className='text-2xl text-blue-600 hover:scale-150' to={`https://www.linkedin.com/in/selina-khatun-7550501a1/`} >
                        <FaLinkedin />
                        </Link>

                        
                    
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved .</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
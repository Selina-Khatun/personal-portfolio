import React, { useState } from 'react';
import img2 from "../../assets/icons8-moon-64.png"
import img3 from "../../assets/exposure_10229386.png"
const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    const containerStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
    };
    return (
        <div style={containerStyle} className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>
            <div onClick={toggleTheme} className=' text-center items-center  py-4'>

                {isDarkMode ? <img className='w-5' src={img2} alt="" /> : <img className='w-5' src={img3} alt="" />}


            </div>

        </div>
    );
};

export default Theme;
import React from 'react';
import FrontOfCard from './FrontOfCard';
import BackOfCard from './BackOfCard';
import './FlipHover.css'
import img1 from '../../../../assets/operations_7067822.png'

const FlipHover = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center w-[90%] mx-auto my-[10%]'>
          <div className="relative  w-60 h-60 rounded-2xl text-white overflow-hidden  transition-all duration-700 card shadow-2xl">
            <FrontOfCard img={img1} heading={'Frontend Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
            <BackOfCard heading={'Frontend Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
        </div>  
          <div className="relative  w-60 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card shadow-2xl">
          <FrontOfCard img={img1} heading={'Web Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
          <BackOfCard heading={'Web Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
        </div>  
          <div className="relative  w-60 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card shadow-2xl">
          <FrontOfCard img={img1} heading={'JavaScript Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
          <BackOfCard heading={'JavaScript Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
        </div>  
          <div className="relative  w-60 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card shadow-2xl">
          <FrontOfCard img={img1} heading={'React Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
          <BackOfCard heading={'React Developer'} subHeading={'creates the visual part of websites, making them look good and user-friendly.'} />
        </div>  
        </div>
        
    );
};

export default FlipHover;
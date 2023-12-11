import React from 'react';
import FrontOfCard from './FrontOfCard';
import BackOfCard from './BackOfCard';
import './FlipHover.css'

const FlipHover = () => {
    return (
        <div className="relative  w-60 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card shadow-2xl">
            <FrontOfCard />
            <BackOfCard />
        </div>
    );
};

export default FlipHover;
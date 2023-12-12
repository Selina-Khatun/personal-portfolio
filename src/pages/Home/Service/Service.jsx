import React from 'react';
import Hover from '../Hover/Hover';
import FlipHover from './Card/FlipHover';

const Service = () => {
    return (
        <div >
          <h1 className='text-5xl font-extrabold  text-blue-800 text-center text-gradient-to-b from-[#0c4f8d] to-[#111d27]'>My Service</h1>
            <FlipHover></FlipHover>
        </div>
    );
};

export default Service;
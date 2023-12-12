import React from 'react';
import './FlipHover.css'
import { Link } from 'react-router-dom';
const BackOfCard = ({ heading, subHeading, img }) => {
    return (
        <div className="flip-container absolute inset-0 w-full flex justify-center bg-black z-10 card-back">
            <div className="card   shadow-md">
                <div className="card-body">
                    <h2 className="card-title">{heading}</h2>
                    <p>{subHeading}</p>
                    <div className="card-actions justify-end">
                       
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackOfCard;
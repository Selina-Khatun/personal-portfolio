import React from 'react';
import './FlipHover.css'
const BackOfCard = () => {
    return (
      <div className="flip-container absolute inset-0 w-full flex justify-center bg-black z-10 card-back">
         <div className="card   shadow-md">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default BackOfCard;
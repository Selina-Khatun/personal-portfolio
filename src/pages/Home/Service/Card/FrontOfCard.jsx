import React from 'react';

const FrontOfCard = ({ heading, subHeading, img }) => {
    return (
        <div className="absolute inset-0  flex justify-center items-center text-center text-slate-800  bg-white   z-20 hover:opacity-0 front-card">
            <div className="card  bg-base-100">
                <div className="card-body p-5 ">
                    <img className='w-[25%] mx-auto' src={img} alt="" />
                    <h2 className="card-title">{heading}</h2>
                    <p>{subHeading}</p>

                </div>
            </div>
        </div>
    );
};

export default FrontOfCard;
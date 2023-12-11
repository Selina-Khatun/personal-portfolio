import React from 'react';

const FrontOfCard = () => {
    return (
        <div className="absolute inset-0  flex justify-center text-slate-800  bg-white   z-20 hover:opacity-0 front-card">
            <div className="card  bg-base-100">
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

export default FrontOfCard;
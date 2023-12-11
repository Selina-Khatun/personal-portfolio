import React from 'react';
import FlipHover from '../Service/Card/FlipHover';

const Hover = () => {
    return (

        <div  class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-[#0a5ba5] hover:text-white hover:text-xl bg-slate-200 rounded-lg group">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0a5ba5] rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative ">
        <div className="">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </span>
    </div>

    );
};

export default Hover;
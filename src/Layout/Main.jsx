import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Theme from '../component/Theme/Theme';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {

    return (

     
        <div className={` max-w-7xl mx-auto`}>
        
               <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            


        </div>
    );
};

export default Main;
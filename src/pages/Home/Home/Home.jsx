import React from 'react';
import Banner from '../Banner/Banner';
import FlipHover from '../Service/Card/FlipHover';
import Hover from '../Hover/Hover';
import AboutMe from '../AboutMe/AboutMe';
import MyProjects from '../../MyProjects/MyProjects';
import Service from '../Service/Service';


const Home = () => (
    <div>
     
        <Banner></Banner>
        <AboutMe></AboutMe>
       <Service></Service>
       <MyProjects></MyProjects>
     
        
    </div>
);

export default Home;
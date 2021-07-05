import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";
import Pricing from "../components/Pricing/Pricing";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const companyName = 'CloudBase'

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar title={companyName} toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <Pricing/>
            <InfoSection {...homeObjThree}/>
            <Footer title={companyName}/>
        </>
    );
};


export default Home;

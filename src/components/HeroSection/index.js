import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import {HeroBg, VideoBg, HeroContainer, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight, HeroP, HeroH1} from "./HeroElements";
import {Button} from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState()
    const onHover =()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>The World's Greatest Trading App</HeroH1>
                <HeroP> Sign up for a new account today and receive
                    $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} smooth={true} duration={500} spy={true} exact="true"
                            offset={-80}> Get
                        started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

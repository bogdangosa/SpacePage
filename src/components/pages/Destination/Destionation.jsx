import React,{useState} from "react";
import { Routes,Route } from "react-router";
import {AnimatePresence,motion} from 'framer-motion'
import './Destionation.css';
import moon_img from '../../../assets/destination/image-moon.png';
import mars_img from '../../../assets/destination/image-mars.png';
import europa_img from '../../../assets/destination/image-europa.png';
import titan_img from '../../../assets/destination/image-titan.png';
import Planet_Info from "./Planet_Info";

const Destionation = () =>{
    const PlanetText = new Array("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
    const PlanetDistance = new Array("384,400 km","225 MIL. km","628 MIL. km","1.6 BIL. km");
    const PlanetTime = new Array("3 days","9 months","3 years","7 years");
    const PlanetNames = new Array("Moon","Mars","Europa","Titan");
    const PlanetImages = new Array(moon_img,mars_img,europa_img,titan_img);


    const [CurentPlanetId,SetCurentPlanetId] = useState(0);

  

    const PageVariants = {
        in: {
            opacity:1,
            y:0
        },
        out: {
            opacity:0,
            y: "-100vh"
        }
    }

    const ImgVariants = {
        in: {
            opacity:1,
            x:0
        },
        out: {
            opacity:0,
            x: "-100vh"
        }
    }

    const PageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 1
    }

    const ImgTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 1,
        delay:0.5
    }
    
    
    return(
        <motion.div className="Destionation"
            initial="out"
            animate="in"
            exit="out"
            variants={PageVariants}
            transition={PageTransition}>
            <div className="planet-container">
                <h2> <span className="grey">01</span> Pick your destination</h2>
                <AnimatePresence exitBeforeEnter>
                    <motion.img src={PlanetImages[CurentPlanetId]} className="image-planet"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={ImgVariants}
                    transition={ImgTransition}
                    key={CurentPlanetId}></motion.img>
                </AnimatePresence>
            </div>
            <div className="planet-info-container">
                <div className="planet-info-nav">
                    <a className="planet-info-link" onClick={()=>SetCurentPlanetId(0)}>
                        <p>moon</p>
                        <div className={CurentPlanetId==0 ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>SetCurentPlanetId(1)}>                        
                        <p>mars</p>
                        <div className={CurentPlanetId==1 ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>SetCurentPlanetId(2)}>
                        <p>europa</p>
                        <div className={CurentPlanetId==2 ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>SetCurentPlanetId(3)}>
                        <p>titan</p>
                        <div className={CurentPlanetId==3 ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    
                </div>
                
                <AnimatePresence exitBeforeEnter>
                <Planet_Info name={PlanetNames[CurentPlanetId]} text={PlanetText[CurentPlanetId]} distance={PlanetDistance[CurentPlanetId]} time={PlanetTime[CurentPlanetId]} key={CurentPlanetId}/>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Destionation;


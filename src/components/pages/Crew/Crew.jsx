import React,{useState} from "react";
import {motion} from 'framer-motion'
import './Crew.css';
import Crew_Info from "./Crew_info";
import douglas_img from '../../../assets/crew/image-douglas-hurley.png';
import mark_img from '../../../assets/crew/image-mark-shuttleworth.png';
import victor_img from '../../../assets/crew/image-victor-glover.png';
import anousheh_img from '../../../assets/crew/image-anousheh-ansari.png';

const Crew = () =>{
    const [CrewId,SetCrewId] = useState(0);

    const CrewJobs = new Array("Commander","Mission Specialist","Pilot","Flight Engineer");
    const CrewNames = new Array("Douglas Hurley","Mark Shuttleworth","Victor Glover","Anousheh Ansari");
    const CrewText = new Array("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                               "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                               "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
                               "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ")  

    const CrewImg = new Array(douglas_img,mark_img,victor_img,anousheh_img);

    const ChangeCrew = (next_crew_id) =>{
        SetCrewId(next_crew_id);
    }

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
    const PageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 1
    }
    
    return(
        <motion.div className="Crew"
            initial="out"
            animate="in"
            exit="out"
            variants={PageVariants}
            transition={PageTransition}>
            <h2 className="crew-title"> <span className="grey">02</span> Meet your crew</h2>

            <Crew_Info job={CrewJobs[CrewId]} name={CrewNames[CrewId]} text={CrewText[CrewId]}/>
            
            <div className="carousel-menu">
                <div className={CrewId==0 ?"carousel-circle circle-active":"carousel-circle"} onClick={()=>ChangeCrew(0)}></div>
                <div className={CrewId==1 ?"carousel-circle circle-active":"carousel-circle"} onClick={()=>ChangeCrew(1)}></div>
                <div className={CrewId==2 ?"carousel-circle circle-active":"carousel-circle"} onClick={()=>ChangeCrew(2)}></div>
                <div className={CrewId==3 ?"carousel-circle circle-active":"carousel-circle"} onClick={()=>ChangeCrew(3)}></div>
            </div>
            
            <div className="crew-line"></div>

            <img src={CrewImg[CrewId]} alt="no image" className="crew-img"></img>



        </motion.div>
    );
}

export default Crew;
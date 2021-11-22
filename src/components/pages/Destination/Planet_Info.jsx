import React from "react";
import { motion } from "framer-motion";
import './Planet_Info.css';

const Planet_Info = (props) =>{

    const VariantsRight = {
        in: {
            opacity:1,
            x: "0"
        },
        out: {
            opacity:0,
            x: "100vw"
        }
    }

    const VariantsBottom = {
        in: {
            opacity:1,
            y: "0"
        },
        out: {
            opacity:0,
            y: "100vh"
        }
    }
    const Transition = {
        type: "tween",
        ease: "anticipate",
        duration: 1,
        delay:0.5
    }
    
    
    return(
        <div className="Planet_Info">
            <motion.h1 className="planet-name"
            key={props.name}
            initial="out"
            animate="in"
            exit="out"
            variants={VariantsRight}
            transition={Transition}>{props.name}</motion.h1>

            <motion.p className="planet-text"
            key={props.text}
            initial="out"
            animate="in"
            exit="out"
            variants={VariantsRight}
            transition={Transition}>{props.text}</motion.p>

            <motion.div className="planet-info-line"
            key={props.distance}
            initial="out"
            animate="in"
            exit="out"
            variants={VariantsBottom}
            transition={Transition}></motion.div>
            
            <motion.div className="planet-stats-container"
            key={props.distance}
            initial="out"
            animate="in"
            exit="out"
            variants={VariantsBottom}
            transition={Transition}>
                <div className="avg-distance-container">
                    <p className="stat-title">Avg. Distance</p>
                    <p className="stat-value">{props.distance}</p>

                </div>
                <div className="time-container">
                    <p className="stat-title">Est. travel time</p>
                    <p className="stat-value">{props.time}</p>
                </div>

            </motion.div>
                                
        </div>
    );
}

export default Planet_Info;
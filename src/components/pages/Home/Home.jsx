import React from "react";
import {motion} from 'framer-motion'
import './Home.css';

const Home = () =>{

    const PageVariants = {
        in: {
            opacity:1,
            y:"0"
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
        <motion.div className="Home"
            initial="out"
            animate="in"
            exit="out"
            variants={PageVariants}
            transition={PageTransition}>
            <div className="home-text-section">
                <h3>So, you want to travel to</h3>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home-cta">
                <div className="home-cta-bg"></div>
                <p className="home-cta-text">Explore</p>
                <div className="home-cta-hover"></div>
            </div>
        </motion.div>
    );
}

export default Home;
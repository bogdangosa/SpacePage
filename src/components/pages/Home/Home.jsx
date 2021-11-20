import React from "react";
import './Home.css';

const Home = () =>{
    
    
    return(
        <div className="Home">
            <div className="home-text-section">
                <h3>So, you want to travel to</h3>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="home-cta">
                <p className="home-cta-text">Explore</p>
            </div>
        </div>
    );
}

export default Home;
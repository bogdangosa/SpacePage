import React from "react";
import './Planet_Info.css';

const Planet_Info = (props) =>{
    
    
    return(
        <div className="Planet_Info">
            <h1 className="planet-name">{props.name}</h1>
            <p className="planet-text">{props.text}</p>

            <div className="planet-info-line"></div>
            <div className="planet-stats-container">
                <div className="avg-distance-container">
                    <p className="stat-title">Avg. Distance</p>
                    <p className="stat-value">{props.distance}</p>

                </div>
                <div className="time-container">
                    <p className="stat-title">Est. travel time</p>
                    <p className="stat-value">{props.time}</p>
                </div>

            </div>
                                
        </div>
    );
}

export default Planet_Info;
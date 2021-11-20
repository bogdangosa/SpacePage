import React from "react";
import './Crew_Info.css';

const Crew_Info = (props) =>{
    
    
    return(
        <div className="Crew-Info">
            <h2 className="crew-job">{props.job}</h2>
            <h1 className="crew-name">{props.name}</h1>
            <p className="crew-text">{props.text}</p>

        </div>
    );
}

export default Crew_Info;
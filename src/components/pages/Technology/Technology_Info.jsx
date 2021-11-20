import React from "react";
import './Technology_Info.css';

const Technology_Info = (props) =>{
    
    
    return(
        <div className="Technology_Info">
        
            <h3 className="technology_subtitle">The Terminology…</h3>
            <h1 className="technology_title">{props.title}</h1>
            <p className="technology_text">{props.text}</p>

        </div>
    );
}

export default Technology_Info;
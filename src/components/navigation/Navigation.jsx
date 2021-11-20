import React,{useState} from "react";
import './Navigation.css';
import logo from '../../assets/shared/logo.svg'
import {Link} from 'react-router-dom'

const Navigation = () =>{
    const [CurentPage,SetCurentPage]  = useState('Home');
    
    
    return(
        <div className="Navigation">
            <img src={logo} className="logo"></img>

            <div className="nav-center-line"></div>

            <div className="nav-links">
                <Link to="/" className="nav-link" onClick={()=>SetCurentPage("Home")}> 
                    <p><span className="bold-nr">00</span> Home</p> 
                    <div className={CurentPage=="Home"?"nav-link-line visible":"nav-link-line"}></div>
                </Link>

                <Link to="/Destination" className="nav-link" onClick={()=>SetCurentPage("Destination")}>
                    <p><span className="bold-nr">01</span> Destination</p> 
                    <div className={CurentPage=="Destination"?"nav-link-line visible":"nav-link-line"}></div>
                </Link>

                <Link to="/Crew" className="nav-link" onClick={()=>SetCurentPage("Crew")}>
                    <p><span className="bold-nr">02</span> Crew</p> 
                    <div className={CurentPage=="Crew"?"nav-link-line visible":"nav-link-line"}></div>
                </Link>

                <Link to="/Technology" className="nav-link" onClick={()=>SetCurentPage("Technology")}>
                    <p><span className="bold-nr">03</span> Technology</p> 
                    <div className={CurentPage=="Technology"?"nav-link-line visible":"nav-link-line"}></div>
                </Link>
                

            </div>
        </div>
    );
}

export default Navigation;
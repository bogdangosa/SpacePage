import React,{useState} from "react";
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


    const [CurentPlanetName,SetCurentPlanetName] = useState("Moon");
    const [CurentPlanetDistance,SetCurentPlanetDistance] = useState(PlanetDistance[0]);
    const [CurentPlanetTime,SetCurentPlanetTime] = useState(PlanetTime[0]);
    const [CurentPlanetText,SetCurentPlanetText] = useState(PlanetText[0]);
    const [CurentPlanetImage,SetCurentPlanetImage] = useState(moon_img);
  
    const UpadeData = (PlanetName) =>{
        SetCurentPlanetName(PlanetName);
        switch(PlanetName){
            case "Moon":
                SetCurentPlanetImage(moon_img);
                SetCurentPlanetText(PlanetText[0]);
                SetCurentPlanetDistance(PlanetDistance[0]);
                SetCurentPlanetTime(PlanetTime[0]);
                break;
            case "Mars":
                SetCurentPlanetImage(mars_img);
                SetCurentPlanetText(PlanetText[1]);
                SetCurentPlanetDistance(PlanetDistance[1]);
                SetCurentPlanetTime(PlanetTime[1]);
                break;
            case "Europa":
                SetCurentPlanetImage(europa_img);
                SetCurentPlanetText(PlanetText[2]);
                SetCurentPlanetDistance(PlanetDistance[2]);
                SetCurentPlanetTime(PlanetTime[2]);
                break;
            case "Titan":
                SetCurentPlanetImage(titan_img);
                SetCurentPlanetText(PlanetText[3]);
                SetCurentPlanetDistance(PlanetDistance[3]);
                SetCurentPlanetTime(PlanetTime[3]);
                break;
        }

    }    
    
    return(
        <div className="Destionation">
            <div className="planet-container">
                <h2> <span className="grey">01</span> Pick your destination</h2>
                <img src={CurentPlanetImage} className="image-planet"></img>
            </div>
            <div className="planet-info-container">
                <div className="planet-info-nav">
                    <a className="planet-info-link" onClick={()=>UpadeData("Moon")}>
                        <p>moon</p>
                        <div className={CurentPlanetName=="Moon" ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>UpadeData("Mars")}>                        
                        <p>mars</p>
                        <div className={CurentPlanetName=="Mars" ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>UpadeData("Europa")}>
                        <p>europa</p>
                        <div className={CurentPlanetName=="Europa" ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    <a className="planet-info-link"  onClick={()=>UpadeData("Titan")}>
                        <p>titan</p>
                        <div className={CurentPlanetName=="Titan" ? "planet-link-line visible":"planet-link-line"}></div>
                    </a>
                    
                </div>

                <Planet_Info name={CurentPlanetName} text={CurentPlanetText} distance={CurentPlanetDistance} time={CurentPlanetTime}/>


            </div>
            

        </div>
    );
}

export default Destionation;
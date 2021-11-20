import React,{useState} from "react";
import './Technology.css';
import rocket_img from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import port_img from '../../../assets/technology/image-spaceport-portrait.jpg';
import capsule_img from '../../../assets/technology/image-space-capsule-portrait.jpg';
import Technology_Info from "./Technology_Info";

const Technology = () =>{
    const [TechnologyId,SetTechnologyId] = useState(0);

    const TechnologyTitles = new Array("Launch vehicle","Spaceport","Space Capsule");
    const TechnologyText = new Array("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                                     "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                                     "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
    const TechnologyImages = new Array(rocket_img,port_img,capsule_img);
    
    return(
        <div className="Technology">
            <h2 className="technology-title"> <span className="grey">03</span>Space Launch 101</h2>
            <div className="technology-info-container">
                <div className="technology-circle-btns-container">
                    <div className={TechnologyId==0 ? "technology-circle-btn technology-circle-btn-active":"technology-circle-btn"} onClick={()=>SetTechnologyId(0)}><p>1</p></div>
                    <div className={TechnologyId==1 ? "technology-circle-btn technology-circle-btn-active":"technology-circle-btn"} onClick={()=>SetTechnologyId(1)}><p>2</p></div>
                    <div className={TechnologyId==2 ? "technology-circle-btn technology-circle-btn-active":"technology-circle-btn"} onClick={()=>SetTechnologyId(2)}><p>3</p></div>
                </div>

                <Technology_Info title={TechnologyTitles[TechnologyId]} text={TechnologyText[TechnologyId]}/>

                <img src={TechnologyImages[TechnologyId]} alt="no image" className="technology-img"></img>
            </div>

        </div>
    );
}

export default Technology;
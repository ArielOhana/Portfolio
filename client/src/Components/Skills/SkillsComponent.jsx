import "./Skills.css";

import TypingAnimation from "../HomePage/TypingAnimation";
import { useState } from "react";
function SkillsComponents({skills}) {
  const [wantDescription, setWantDescription] = useState(false);
    return (
      <>
       <div className="skill-component">
          <div>
            <span className="skill-component-title">{skills.mainTitle}</span>
          </div>
          <div className="innerskills">
            <span className="skill-title">{skills.firstTitle}</span>
            <div className="icons-container">
             { skills.firstSkills.map((element,index) => (
              <img className="skill-icon" key={index} src={element} alt="javaScript" />
             ))}
            </div>
            <span  className="skill-title">{skills.secondTitle}</span>
            <div className="icons-container">
             { skills.secondSkills.map((element,index) => (
              <img className="skill-icon" key={index} src={element} alt="javaScript" />
             ))}
            </div>
            
           
            <div className="skill-describe" onClick={()=> setWantDescription((prev)=> !prev)}>
              {wantDescription ? ( <TypingAnimation sequence={skills.sequence} cursor={false} speed={80}/>) : (<span className="moreinfo-button">Click here for description</span>)}
           
  </div>
          </div>
          
       </div>

      </>
    )
  }
  
export default SkillsComponents
  
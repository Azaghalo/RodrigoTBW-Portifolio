import { useCallback, useEffect, useState } from "react";
import "./LandingSpot.css";
import "./Style.css";
import { BsGithub, BsLinkedin, BsFillFileEarmarkTextFill } from "react-icons/bs";
import ArrowIcon from "./ArrowIcon";
import GlitchText from "./GlitchText";
import IconeTech from "./IconeTech";

const skills = ["React", "Front-End", "JavaScript", "Back-End", "Node.js"];

export default function LandingSpot() {
  const [newSkill, setSkill] = useState("React");

  const changeSkill = useCallback(() => {
    let index = skills.indexOf(newSkill) === skills.length - 1 ? 0 : skills.indexOf(newSkill) + 1;
    setSkill(skills[index]);
  });

  useEffect(() => {
    const intervalID = setInterval(changeSkill, 1500);
    return () => clearInterval(intervalID);
  }, [changeSkill]);

  return (
    <div className="landingSpot">
      <div className="mainBanner">
        <div className="firstLine">
          <GlitchText text={newSkill} />
          <div className="icons">
            <a href="https://github.com/Azaghalo" target="blank">
              <IconeTech tech={"GitHub"} stroke={"#52A9D1"}>
                <BsGithub className="tooltipIcon" />
              </IconeTech>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-tbw/" target="blank">
              <IconeTech tech={"LinkedIn"} stroke={"#52A9D1"}>
                <BsLinkedin className="tooltipIcon" />
              </IconeTech>
            </a>
            <a href="https://drive.google.com/file/d/1-HwRHtsVr2WaJYerSuOvCJ8GjDqDMYXV/view?usp=sharing" target="blank">
              <IconeTech tech={"Resume"} stroke={"#52A9D1"}>
                <BsFillFileEarmarkTextFill className="tooltipIcon" />
              </IconeTech>
            </a>
          </div>
        </div>
        <span className="glitchFont">DEVELOPER</span>
        <div className="name">Rodrigo Wiebbelling</div>
      </div>
    </div>
  );
}

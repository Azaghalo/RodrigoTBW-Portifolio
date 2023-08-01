import "./About.css";
import skills from "../Images/RW.svg";
import { BsGithub, BsLinkedin, BsFillFileEarmarkTextFill, BsSteam } from "react-icons/bs";
import { GlitchText, IconeTech } from "../components";

export default function About() {
  return (
    <div className="about-wrapper">
      <img className="about-img" src={skills} />
      <div className="about-text-wrapper">
        <GlitchText text="Rodrigo Wiebbelling" />
        <p>
          Sou um desenvolvedor Full-stack com mais de 2 anos de experiência, focado em React e Node.js. Tenho paixão por criar interfaces interativas
          e experiências envolventes. Neste portfólio, busquei demonstrar projetos funcionais e intuitivos.
        </p>
        <p>
          Tenho amplo conhecimento e habilidades em JavaScript, TypeScript, C++, C# e Java, bem como em React, Node.js, Photoshop e Unity Engine.
          Iniciei minha jornada no desenvolvimento criando pequenos jogos indies e, em seguida, fui introduzido ao desenvolvimento web.
        </p>
        <p>
          Nas minhas horas vagas, gosto de relaxar ouvindo músicas e jogando xadrez ou Counter-Strike. Estou pronto para novos desafios e
          oportunidades de colaboração. Vamos construir algo surpreendente juntos!
        </p>
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
          <a href="https://steamcommunity.com/profiles/76561198065681829/" target="blank">
            <IconeTech tech={"Steam"} stroke={"#52A9D1"}>
              <BsSteam className="tooltipIcon" />
            </IconeTech>
          </a>
        </div>
      </div>
    </div>
  );
}

import "./Portifolio.css";
import ShowCase from "./ShowCase";
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import LinkBtn from "./LinkBtn";
import IconeTech from "./IconeTech";
import GlitchText from "./GlitchText";
import TranspMob from "./Images/MobileBg.png";
import TranspDesk from "./Images/DesktopBg.png";
import PortMob from "./Images/PortifolioLandingMob.png";
import PortDesk from "./Images/PortifolioLanding.png";

export default function Portfolio() {
  return (
    <div className="portifolioWraper">
      <ShowCase
        phonePrints={TranspMob}
        tabletPrints={TranspDesk}
        IpadScreenSizes={{ max: 2583, mid: 1890, min: 1390 }}
        IphoneScreenSizes={{ max: 1025.34, mid: 804, min: 619 }}
        numberOfPrints={6}
      >
        <div className="projectDescription">
          <GlitchText text={"Portal da Transparência"} />
          <div className="descpText">
            <h3>Desenvolvimento Front-end e Back-end</h3>
            <p>O Portal da Transparência é uma plataforma online que promove a divulgação clara e acessível de informações governamentais.</p>
            <p>
              Nele, é possível encontrar dados sobre orçamentos, receitas, despesas, contratos e licitações do setor público. Com transparência e
              prestação de contas, o portal fortalece a participação cidadã, incentiva a ética na gestão pública e promove a tomada de decisões
              informadas.
            </p>
          </div>
          <div className="technologies">
            <IconeTech tech={"JavaScript"} stroke={"#52A9D1"}>
              <SiJavascript className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"React"} stroke={"#52A9D1"}>
              <SiReact className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"Node.js"} stroke={"#52A9D1"}>
              <SiNodedotjs className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"Java"} stroke={"#52A9D1"}>
              <FaJava className="technologiesIcons" />
            </IconeTech>
          </div>
          <LinkBtn link={"https://grpdsv.thema.inf.br/transparencia/prefeitura/#/"} altBtn={false} btnText={"Visite a página"} />
        </div>
      </ShowCase>
      <ShowCase
        inverted={true}
        phonePrints={PortMob}
        tabletPrints={PortDesk}
        IpadScreenSizes={{ max: 834, mid: 630, min: 463.3 }}
        IphoneScreenSizes={{ max: 341.78, mid: 268, min: 206.3 }}
        numberOfPrints={2}
      >
        <div className="projectDescription">
          <GlitchText text={"Portal da Transparência"} />
          <div className="descpText">
            <h3>Desenvolvimento Front-end e Back-end</h3>
            <p>O Portal da Transparência é uma plataforma online que promove a divulgação clara e acessível de informações governamentais.</p>
            <p>
              Nele, é possível encontrar dados sobre orçamentos, receitas, despesas, contratos e licitações do setor público. Com transparência e
              prestação de contas, o portal fortalece a participação cidadã, incentiva a ética na gestão pública e promove a tomada de decisões
              informadas.
            </p>
          </div>
          <div className="technologies">
            <IconeTech tech={"JavaScript"} stroke={"#70437f"}>
              <SiJavascript className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"React"} stroke={"#70437f"}>
              <SiReact className="technologiesIcons" />
            </IconeTech>
          </div>
          <div className="btnsContainer">
            <LinkBtn link={"#"} altBtn={false} btnText={"Visite a página"} />
            <LinkBtn link={"#"} altBtn={true} btnText={"GitHub"} />
          </div>
        </div>
      </ShowCase>
    </div>
  );
}

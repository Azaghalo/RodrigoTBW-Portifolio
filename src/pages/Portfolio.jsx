import "./Portifolio.css";
import ShowCase from "../components/ShowCase";
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiAxios, SiTailwindcss } from "react-icons/si";
import LinkBtn from "../components/LinkBtn";
import IconeTech from "../components/IconeTech";
import GlitchText from "../components/GlitchText";
import TranspMob from "../Images/MobileBg.png";
import TranspDesk from "../Images/DesktopBg.png";
import PortMob from "../Images/PortifolioLandingMob.png";
import PortDesk from "../Images/PortifolioLanding.png";
import WeatherDesk from "../Images/WeatherAppDesk.png";
import WeatherMob from "../Images/WheaterAppMob.png";

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
          <div className="btnsContainer">
            <LinkBtn link={"https://grpdsv.thema.inf.br/transparencia/prefeitura/#/"} altBtn={false} btnText={"Visite a página"} />
          </div>
        </div>
      </ShowCase>
      <ShowCase
        inverted={true}
        phonePrints={WeatherMob}
        tabletPrints={WeatherDesk}
        IpadScreenSizes={{ max: 415, mid: 315, min: 231.65 }}
        IphoneScreenSizes={{ max: 170.89, mid: 134, min: 103.15 }}
        numberOfPrints={1}
      >
        <div className="projectDescription">
          <GlitchText text={"My Weather App"} />
          <div className="descpText">
            <h3>Desenvolvimento Front-end</h3>
            <p>Desenvolvido para estudo e familiarização com as ferramentas.</p>
            <p>Utiliza React como framework, Tailwind para estilização e Context API para propagar informações dentro do site.</p>
            <p>
              100% responsivo inspirado no design{" "}
              <a target="blank" className="linkStyle" href="https://dribbble.com/shots/15342976-Weather-forecast-Mobile-App-Deisign">
                "Weather forecast - Mobile App Deisign"
              </a>{" "}
              de Outcrowd. Conta com animações dinâmicas de neve e chuva, dependendo das condições climáticas da cidade selecionada.
            </p>
            <p>Coleta informações da api "weatherapi.com".</p>
          </div>
          <div className="technologies">
            <IconeTech tech={"JavaScript"} stroke={"#70437f"}>
              <SiJavascript className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"React"} stroke={"#70437f"}>
              <SiReact className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"TailWind"} stroke={"#70437f"}>
              <SiTailwindcss className="technologiesIcons" />
            </IconeTech>
            <IconeTech tech={"Axios"} stroke={"#70437f"}>
              <SiAxios className="technologiesIcons" />
            </IconeTech>
          </div>
          <div className="btnsContainer">
            <LinkBtn link={"https://azaghalo.github.io/my_weather_app/"} altBtn={false} btnText={"Visite a página"} />
            <LinkBtn link={"https://github.com/Azaghalo/my_weather_app"} altBtn={true} btnText={"GitHub"} />
          </div>
        </div>
      </ShowCase>
      <ShowCase
        phonePrints={PortMob}
        tabletPrints={PortDesk}
        IpadScreenSizes={{ max: 834, mid: 630, min: 463.3 }}
        IphoneScreenSizes={{ max: 341.78, mid: 268, min: 206.3 }}
        numberOfPrints={2}
      >
        <div className="projectDescription">
          <GlitchText text={"Meu Portfólio"} />
          <div className="descpText">
            <h3>Desenvolvimento Front-end</h3>
            <p>Repositório com o código desse portfólio.</p>
            <p>Desenvolvido usando React (Vite) Context API e css puro</p>
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
            <LinkBtn link={"https://github.com/Azaghalo/RodrigoTBW-Portifolio"} altBtn={true} btnText={"GitHub"} />
          </div>
        </div>
      </ShowCase>
    </div>
  );
}

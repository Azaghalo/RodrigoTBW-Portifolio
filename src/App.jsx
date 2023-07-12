import "./Style.css";
import LandingSpot from "./LandingSpot";
import SectionBreak from "./SectionBreak";
import Portfolio from "./Portfolio";

export default function App() {
  return (
    <div className="main">
      <LandingSpot />
      <SectionBreak />
      <Portfolio />
    </div>
  );
}

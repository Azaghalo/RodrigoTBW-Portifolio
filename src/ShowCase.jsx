import { useCallback, useEffect, useState } from "react";
import "./ShowCase.css";
import Iphone from "./Images/iphoneBack.png";
import Ipad from "./Images/ipadBack.png";

export default function ShowCase(props) {
  const [curIndex, setCurIndex] = useState(0);
  const [windowSize, setWindowSize] = useState("max");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth > 590 ? "max" : window.innerWidth > 450 ? "mid" : "min");
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const changePic = useCallback(() => {
    let index = curIndex === props.numberOfPrints - 1 ? 0 : curIndex + 1;
    setCurIndex(index);
  });

  useEffect(() => {
    const intervalID = setInterval(changePic, 2000);
    return () => clearInterval(intervalID);
  }, [changePic]);

  return (
    <div className={`project${props.inverted ? " inverted" : ""}`}>
      <div className="showcase">
        <div className="ipad">
          <div
            style={{
              backgroundImage: `url(${props.tabletPrints})`,
              width: `${props.IpadScreenSizes[windowSize]}px`,
              transform: `translate(${(props.IpadScreenSizes[windowSize] / props.numberOfPrints) * -curIndex}px)`,
            }}
            className="ipadScreen"
          />
          <img src={Ipad} className="ipadFrame" />
        </div>
        <div className="iphone">
          <div
            style={{
              backgroundImage: `url(${props.phonePrints})`,
              width: `${props.IphoneScreenSizes[windowSize]}px`,
              transform: `translate(${(props.IphoneScreenSizes[windowSize] / props.numberOfPrints) * -curIndex}px)`,
            }}
            className="iphoneScreen"
          />
          <img src={Iphone} className="iphoneFrame" />
        </div>
      </div>
      {props.children}
    </div>
  );
}

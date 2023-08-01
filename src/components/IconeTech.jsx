import ArrowIcon from "./ArrowIcon";

export default function IconeTech(props) {
  return (
    <div className="tooltip">
      {props.children}
      <span className="tooltiptext">
        <ArrowIcon className="arrowIcon" stroke={props.stroke} />
        {props.tech}
      </span>
    </div>
  );
}

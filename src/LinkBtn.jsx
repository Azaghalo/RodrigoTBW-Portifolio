export default function LinkBtn(props) {
  return (
    <a className="linkBtn" href={props.link} target="blank">
      <div className="visitBtnContainer">
        <button className={props.altBtn ? "visitBtnAlt" : "visitBtn"}>{props.btnText}</button>
        <div className={props.altBtn ? "btnShadowAlt" : "btnShadow"} />
      </div>
    </a>
  );
}

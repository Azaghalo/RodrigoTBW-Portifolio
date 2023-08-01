export default function GlitchText(props) {
  return (
    <h2 className="glitch">
      <span aria-hidden="true">{props.text}</span>
      {props.text}
      <span aria-hidden="true">{props.text}</span>
    </h2>
  );
}

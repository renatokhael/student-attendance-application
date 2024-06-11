import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <small>Chegada - {props.time}</small>
    </div>
  );
}

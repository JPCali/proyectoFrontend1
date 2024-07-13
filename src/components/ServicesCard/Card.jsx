import "./Card.css";

export function Card(options) {
  return (
    <div>
      <image src={options}></image>
      <h2>{options.title}</h2>
      <p>{options.description}</p>
    </div>
  );
}

export function Card({ service }) {
  const onClickNameHandler = () => {
    console.log(service);
  };

  return (
    <div>
      <img src=""></img>
      <h2 onClick={onClickNameHandler}>Nombre: {service.service_name}</h2>
      <p>Descripcion: {service.description}</p>
    </div>
  );
}

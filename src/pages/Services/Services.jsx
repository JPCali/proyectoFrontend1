import "./Services.css";
import { Card } from "../../components/ServicesCard/Card";
import { getAllServices } from "../../services/apiCalls";
import { useEffect, useState } from "react";

export function Services() {
  const [services, setServices] = useState([]);

  const getApiServices = async () => {
    const response = await getAllServices();
    setServices(response);
  };

  useEffect(() => {
    getApiServices();
  }, []);

  // console.log(services);

  return (
    <>
      <p>Servicios</p>

      {services.map((service) => (
        <Card key={service.name} service={service} />
      ))}
    </>
  );
}

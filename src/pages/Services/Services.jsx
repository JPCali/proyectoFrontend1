import "./Card.css";
import { Card } from "../../components/ServicesCard/Card";

export function Card() {
  return (
    <>
      <Card
        title="Service 1"
        description="This is a service 1 description"
        image="path/to/image"
        link="https://example.com"
      />
      <Card
        title="Service 2"
        description="This is a service 2 description"
        image="path/to/image"
        link="https://example.com"
      />
      <Card
        title="Service 3"
        description="This is a service 3 description"
        image="path/to/image"
        link="https://example.com"
      />
      <Card
        title="Service 4"
        description="This is a service 4 description"
        image="path/to/image"
        link="https://example.com"
      />
      <Card
        title="Service 5"
        description="This is a service 5 description"
        image="path/to/image"
        link="https://example.com"
      />
    </>
  );
}

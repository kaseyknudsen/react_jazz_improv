import { Card, CardBody } from "reactstrap";

const SpeedCard = (name) => {
  const { speed } = name;
  return (
    <Card className="card card-grow">
      <CardBody className="text-center">
        <h4>{speed}</h4>
      </CardBody>
    </Card>
  );
};

export default SpeedCard;

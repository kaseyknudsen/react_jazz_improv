
import { Card, CardBody } from "reactstrap";

const IntervalCard = (note) => {
  const { name } = note;
  return (
    <Card className="card card-grow" >
      <CardBody className="text-center"><h4>{name}</h4></CardBody>
    </Card>
  );
};

export default IntervalCard;

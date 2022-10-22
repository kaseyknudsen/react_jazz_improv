
import { Card, CardBody } from "reactstrap";

const IntervalCard = (note) => {
  const { name } = note;
  return (
    <Card>
      <CardBody className="text-center"><h4>{name}</h4></CardBody>
    </Card>
  );
};

export default IntervalCard;

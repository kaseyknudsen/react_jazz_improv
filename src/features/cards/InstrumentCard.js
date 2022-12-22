import { Card, CardBody } from "reactstrap";

const InstrumentCard = ({ instrument }) => {
  return (
    <Card className="card card-grow">
      <CardBody className="text-center">
        <h5>{instrument}</h5>
      </CardBody>
    </Card>
  );
};

export default InstrumentCard;

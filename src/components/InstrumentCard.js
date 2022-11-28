import { Card, CardBody } from "reactstrap";

const InstrumentCard = (name) => {
    
  return (
    <Card>
      <CardBody className="text-center">{name}</CardBody>
    </Card>
  );
};

export default InstrumentCard;

import { Card, CardHeader, CardBody, CardImg } from "reactstrap";

const BbMajorIntervalCard = ({ majorInterval, image, name }) => {
  return (
    <Card className="card card-grow">
      <CardHeader className="text-center">
        <h5>{majorInterval}</h5>
      </CardHeader>
      <CardBody>
        <CardImg src={image} alt={name} />
      </CardBody>
    </Card>
  );
};

export default BbMajorIntervalCard;
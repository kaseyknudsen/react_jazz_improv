import { Card, CardHeader, CardBody, CardImg } from "reactstrap";

const MajorScaleCard = ({ majorScale, image, name }) => {
  return (
    <Card className="card card-grow">
      <CardHeader className="text-center">
        <h4>{majorScale}</h4>
      </CardHeader>
      <CardBody>
        <CardImg src={image} alt={name} />
      </CardBody>
    </Card>
  );
};

export default MajorScaleCard;

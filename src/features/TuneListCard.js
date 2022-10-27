import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const TuneListCard = ({ title, text }) => {
  console.log(typeof text, text);
  return (
    <Card className="text-center">
      <CardBody>
        <CardTitle>
          <h4 className="mb-4" style={{ textDecoration: "underline" }}>
            {title}
          </h4>
        </CardTitle>
        <CardText class="list-of-tunes">
          <h5>
            {typeof text === "string"
              ? "***" + text + "***"
              : text.map((tune) => (
                  <h5 style={{ fontSize: "18px" }}>{tune}</h5>
                ))}
          </h5>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TuneListCard;

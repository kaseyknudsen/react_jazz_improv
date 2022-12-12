import { Card, CardText } from "reactstrap";

const AnswerCard = ({ image, answer }) => {
  if (answer) {
    return (
      <>
        <Card className="card">
          <CardText className="card-body text-center">
            <h3 className="card-text">{answer}</h3>
          </CardText>
        </Card>
      </>
    );
  }
};
export default AnswerCard;

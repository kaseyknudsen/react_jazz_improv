import { Card, CardBody, CardText } from "reactstrap";

const GuessIntervalCard = () => {
    return (
        <Card className="card card-grow">
            <CardBody>
                <CardText className="text-center"><h5>What Interval Am I?</h5></CardText>
            </CardBody>
        </Card>
    )
}

export default GuessIntervalCard;
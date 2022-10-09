import { Card, CardBody, CardTitle, CardText, CardImg  } from 'reactstrap';

const TheoryCard = ({title, question, image} ) => {
    return (
        <Card>
            {/* <CardImg>{image}</CardImg> */}
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{question}</CardText>
            </CardBody>
        </Card>
    )
}

export default TheoryCard;
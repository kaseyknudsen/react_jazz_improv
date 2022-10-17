import { Card, CardImg, CardBody } from "reactstrap";

const QuickLinkCard = ( {image, text} ) => {
    return (
        <>
            <Card className="card card-grow">
                <CardImg>{image}</CardImg>
                <CardBody className="card-body">
                    <p className="card-text">{text}</p>
                </CardBody>
            </Card>
        </>
    )
};

export default QuickLinkCard;
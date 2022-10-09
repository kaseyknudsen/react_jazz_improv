import { Container, Col, Row } from "reactstrap";
import pic from '../app/images/Kasey-image1.jpg'


const AboutMe = () => {
    return (
        <Container>
            <Row className="mt-5 ms-auto">    
                <Col md='6'>
                    <h1>About Me</h1>
                    <p>
                    Hello, and thanks for visiting the Jazz Theory Website. My name is Kasey, and I've been 
                    studying jazz for most of my adult life. I believe that learning how to improvise shouldn't 
                    be overwhelming--with a step by step systematic approach, you can get as good as you want to be. 
                    Whether you want to improve your theory knowledge, develop your ear, learn jazz standards, 
                    organize your practice routine or learn a bit about jazz history, you have come to the right place!
                    </p>
                </Col>
                <Col md='6'>
                    <img className="kaseyImage1" src={pic} alt='kasey knudsen' style={{width:'405px'}}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;
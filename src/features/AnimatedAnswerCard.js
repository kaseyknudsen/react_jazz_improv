import { useState, useEffect } from "react";
import { Card, CardBody, CardImg } from "reactstrap";
import { useSpring, animated } from "react-spring";

export const AnimatedAnswerCard = ( {text, image} ) => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 2000 }
  });

  useEffect(() => {
    setToggle(true);
  },[]);

  return (
    <>
      <animated.div style={animatedStyle}>
        <Card className="card card-grow">
          <CardImg src={image}/>
          <CardBody className="card-body text-center">
            <p className="card-text">{text}</p>
          </CardBody>
        </Card>
      </animated.div>
    </>
  );
};

export default AnimatedAnswerCard;

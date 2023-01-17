import { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import GuessIntervalCard from "./cards/GuessIntervalCard";
import GuessIntervalAnswerCard from "./cards/GuessIntervalAnswerCard";
import { altoSaxBbMajorScale } from "../EARTRAINING/MajorScaleIntervals";

const RandomMajorIntervals = () => {
  const [currentRandomInterval, setCurrentRandomInterval] = useState(
    altoSaxBbMajorScale[0]
  );
  const [randomIntervalAnswer, setRandomIntervalAnswer] =
    useState(altoSaxBbMajorScale);

  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  //function that plays an interval of the Bb major scale
  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  //function that plays a random sequence from the Bb major scale
  const randomMajorSequence = () => {
    const intervalIndex = Math.floor(
      Math.random() * altoSaxBbMajorScale.length
    );
    const randomMajInterval = altoSaxBbMajorScale[intervalIndex];
    playMajorInterval(randomMajInterval);
    setRandomIntervalAnswer("");
    return randomMajInterval;
  };

  //function to update the major interval answer card
  const showAnswer = () => {
    setRandomIntervalAnswer(currentRandomInterval);
  };
  return (
    <Container style={{ maxWidth: 500 }}>
      <Row className="mt-4">
        <h2 style={{ textAlign: "center" }}>Now it's time to test your ear!</h2>
      </Row>
      <Row className="mt-3 mx-auto">
        <Col
          sm="6"
          className="mb-3"
          onClick={() => {
            setIsAnswerShowing(false);
            setCurrentRandomInterval(randomMajorSequence());
          }}
        >
          <GuessIntervalCard />
        </Col>

        <Col
          sm="6"
          onClick={() => {
            showAnswer();
            setIsAnswerShowing(true);
          }}
        >
          <GuessIntervalAnswerCard
            name={
              isAnswerShowing
                ? randomIntervalAnswer.title
                : "Click to see answer"
            }
            image={randomIntervalAnswer.image}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RandomMajorIntervals;

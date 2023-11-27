import { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import GuessIntervalCard from "../features/cards/GuessIntervalCard";
import GuessIntervalAnswerCard from "../features/cards/GuessIntervalAnswerCard";
import { chromaticIntervals } from "../EARTRAINING/ChromaticIntervals";
import ReplaySequenceCard from "../features/cards/ReplaySequenceCard";

const RandomChromaticIntervals = () => {
  const [currentRandomInterval, setCurrentRandomInterval] = useState(
    chromaticIntervals[0]
  );
  const [randomIntervalAnswer, setRandomIntervalAnswer] =
    useState(chromaticIntervals);

  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  //function that plays a random chromatic interval
  const playChromaticInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  //function that finds the index and plays a random chromatic interval
  const chromaticInterval = () => {
    const intervalIndex = Math.floor(Math.random() * chromaticIntervals.length);
    const randomInterval = chromaticIntervals[intervalIndex];
    playChromaticInterval(randomInterval);
    setRandomIntervalAnswer("");
    return randomInterval;
  };

  //function to update the random chromatic interval card
  const showAnswer = () => {
    setRandomIntervalAnswer(currentRandomInterval);
  };

  return (
    <Container style={{ maxWidth: 600 }}>
      <Row className="mt-4">
        <h2 style={{ textAlign: "center" }} className="mt-5">
          Test your ear!
        </h2>
      </Row>
      <Row className="mt-3 mx-auto">
        <Col
          sm="4"
          className="mb-3"
          onClick={() => {
            setIsAnswerShowing(false);
            setCurrentRandomInterval(chromaticInterval());
          }}
        >
          <GuessIntervalCard />
        </Col>
        <Col onClick={() => playChromaticInterval(currentRandomInterval)}>
          <ReplaySequenceCard />
        </Col>
        <Col
          sm="4"
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

export default RandomChromaticIntervals;

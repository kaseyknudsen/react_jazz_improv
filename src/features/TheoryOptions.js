import TheoryOptionsCard from "./cards/TheoryOptionsCard.js";
import TheoryCard from "./cards/TheoryCard.js";
import AnimatedAnswerCard from "./cards/AnimatedAnswerCard.js";
import AnswerCard from "./cards/AnswerCard";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";
import NextQuestionCard from "./cards/NextQuestionCard.js";
import { Container, Row, Col } from "reactstrap";

const UpdatedTheoryPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    topic: "Intervals",
    id: 1,
  });

  const [answer, setAnswer] = useState(null);

  const topicToTopicArrayMap = {
    Intervals: IntervalQuestions,
    "Key Signatures": KeySignatureQuestions,
    "Modes of the Major Scale": ModeQuestions,
    Chords: ChordQuestions,
  };

  const currentQuestionContent = topicToTopicArrayMap[
    currentQuestion.topic
  ].find(({ id }) => currentQuestion.id === id);

  const topicsArray = Object.keys(topicToTopicArrayMap);

  const onClickNext = () => {
    const randomNum = Math.floor(
      Math.random() * topicToTopicArrayMap[currentQuestion.topic].length
    );
    console.log(randomNum);
    setCurrentQuestion({ ...currentQuestion, id: randomNum });
    setAnswer(null);
  };

  const setTopic = (topic) => {
    setCurrentQuestion({ ...currentQuestion, topic, id: 0 });
    setAnswer(null);
  };

  const showAnswer = () => {
    setAnswer(currentQuestionContent.answer);
    console.log(currentQuestion.id);
  };

  return (
    <>
      <Container style={{ maxWidth: 800}}>
        <h1 className="text-center mb-5">Theory Questions</h1>
        <div className="theory-topics">
          <h2 className="mb-5">Choose A Topic</h2>
          <Row>
            {topicsArray.map((topic) => {
              return (
                <Col
                  sm="12"
                  md="6"
                  lg="3"
                  className="mb-3"
                  onClick={() => setTopic(topic)}
                >
                  <TheoryOptionsCard topic={topic} />
                </Col>
              );
            })}
          </Row>
        </div>
        </Container>
        <Container style={{ maxWidth: 800}}>
        <div className="mt-5 mb-3 theory-topics">
          <h2 className="mb-5">Question</h2>
          <TheoryCard
            question={currentQuestionContent.question}
            image={currentQuestionContent.image}
          />

          <div className="mt-3 mb-3" onClick={() => onClickNext()}>
            <NextQuestionCard />
          </div>
        </div>
        </Container>
        <Container style={{ maxWidth: 800}}>
        <div className="mt-5 mb-3 theory-topics">
          <h2 className="mb-3">Answer</h2>
          <AnswerCard answer={answer} />
        </div>
        <div onClick={() => showAnswer()}>
          <AnimatedAnswerCard text={"Ready to see the answer? Click here."} />
        </div>
        </Container>
     
    </>
  );
};

export default UpdatedTheoryPage;

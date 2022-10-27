import { Row, Col } from "reactstrap";
import TheoryOptionsCard from "../features/TheoryOptionsCard.js";
import TheoryCard from "../features/TheoryCard.js";
import { AnswerCard, ReadyForTheAnswer } from "../features/AnswerCard.js";
import RandomQuestionSlice from "../features/RandomQuestionSlice.js";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";

const TheoryOptionsPage = () => {
  const [question, setQuestion] = useState("");

  const topicToTopicArrayMap = {
    Intervals: IntervalQuestions,
    "Key Signatures": KeySignatureQuestions,
    Modes: ModeQuestions,
    Chords: ChordQuestions,
  };
  const topicsArray = Object.keys(topicToTopicArrayMap);
  const handleTopicClick = (topic) => {
    const questionArray = topicToTopicArrayMap[topic];
    setQuestion(RandomQuestionSlice(questionArray));
  };
  return (
    <>
      <h1 className="text-center">Theory Questions</h1>
      <Row className="mt-5">
        <Col xs="3" className="mx-auto">
          <TheoryCard question={question.question} image={question.image} />
          {console.log(question)}
        </Col>
      </Row>
      <Row className="mt-5">
        {topicsArray.map((topic) => {
          return (
            <Col
              sm="7"
              className="mx-auto mt-3"
              onClick={() => handleTopicClick(topic)}
            >
              <TheoryOptionsCard topic={topic} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TheoryOptionsPage;

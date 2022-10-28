import { Row, Col, Button } from "reactstrap";
import TheoryOptionsCard from "../features/TheoryOptionsCard.js";
import TheoryCard from "../features/TheoryCard.js";
import AnimatedAnswerCard from "../features/AnimatedAnswerCard.js";
import AnswerCard from "../features/AnswerCard"
import RandomQuestionSlice from "../features/RandomQuestionSlice.js";
import { useState, useEffect } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";

const TheoryOptionsPage = () => {
  //state
  const [question, setQuestion] = useState("");
  const [answerToQuestion, setAnswerToQuestion] = useState("");

  //topic names and topic content
  const topicToTopicArrayMap = {
    Intervals: IntervalQuestions,
    "Key Signatures": KeySignatureQuestions,
    "Modes of the Major Scale": ModeQuestions,
    Chords: ChordQuestions,
  };
  //display the topic names inside the cards
  const topicsArray = Object.keys(topicToTopicArrayMap);

  //function to update the Theory Card once the Theory Options card is clicked
  const handleTopicClick = (topic) => {
    const questionArray = topicToTopicArrayMap[topic];
    setQuestion(RandomQuestionSlice(questionArray));
  };

  
  const showAnswer = () => {
    setAnswerToQuestion(question.answer);
  };


  //TheoryOptionsPage returns 1)TheoryOptionsCard 2) TheoryCard that displays the actual question 3) A card to click to see the answer 4) an answer card
  return (
    <>
      <h1 className="text-center">Theory Questions</h1>

      <Row className="mt-5">
        <Col xs="3" className="mx-auto">
          <TheoryCard question={question.question} image={question.image} />
        </Col>

        <Col sm="2" className="mx-auto mt-3" onClick={showAnswer}>
          <AnimatedAnswerCard text={"Ready to see the answer? Click here."} />
        </Col>
        <Col sm="3" className="ms-auto mx-auto">
          <AnswerCard answer={answerToQuestion} />
        </Col>
      </Row>

      {topicsArray.map((topic) => {
        return (
          <Row className="mt-2">
            <Col
              sm="5"
              className="mx-auto mt-3"
              onClick={() => handleTopicClick(topic)}
            >
              <TheoryOptionsCard topic={topic} />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default TheoryOptionsPage;

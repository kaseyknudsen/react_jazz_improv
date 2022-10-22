import { Row, Col } from "reactstrap";
import TheoryOptionsCard from "../features/TheoryOptionsCard.js";
import TheoryCard from "../features/TheoryCard.js";
import { randomQuestionSlice } from "../features/questionsSlice.js";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";
import { DisplayTheoryQuestion } from "../features/DisplayTheoryQuestions.js";

const TheoryOptionsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("Modes");
  const [question, setQuestion] = useState(" ");
  const topicsArray = ["Intervals", "Key Signatures", "Modes", "Chords"];
  const handleTopicClick = (topic) => {
    let questionArray;
    switch (topic) {
      case "Intervals":
        questionArray = IntervalQuestions;
        break;
      case "Key Signatures":
        questionArray = KeySignatureQuestions;
        break;
      case "Chords":
        questionArray = ChordQuestions;
        break;
      case "Modes":
        questionArray = ModeQuestions;
        break;
      default:
        break;
    }
    setQuestion(randomQuestionSlice(questionArray));
  };
  return (
    <>
      <h1 className="text-center">Theory Options</h1>
      
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

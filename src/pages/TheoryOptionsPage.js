
import TheoryOptionsCard from "../features/TheoryOptionsCard.js";
import TheoryCard from "../features/TheoryCard.js";
import AnimatedAnswerCard from "../features/AnimatedAnswerCard.js";
import AnswerCard from "../features/AnswerCard";
import RandomQuestionSlice from "../features/RandomQuestionSlice.js";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";
// import question_mark from "../app/images/question_mark.png";
import NextQuestionCard from "../features/NextQuestionCard.js";

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
      <h1 className="text-center mb-5">Theory Questions</h1>
      <div className="theory-topics grid">
        <div>
          {topicsArray.map((topic) => {
            return (
              <div className="mb-3" onClick={() => handleTopicClick(topic)}>
                <TheoryOptionsCard topic={topic} />
              </div>
            );
          })}
        </div>
        <div>
          <div className="mb-3">
            <TheoryCard question={question.question} image={question.image} />
          </div>
          <div className="mb-3">
            <NextQuestionCard />
          </div>
        </div>
        <div>
          <div className="mb-3">
            <AnswerCard image={question.image} answer={answerToQuestion} />
          </div>
          <div onClick={showAnswer}>
            <AnimatedAnswerCard text={"Ready to see the answer? Click here."} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheoryOptionsPage;

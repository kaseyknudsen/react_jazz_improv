import TheoryOptionsCard from "../features/TheoryOptionsCard.js";
import TheoryCard from "../features/TheoryCard.js";
import AnimatedAnswerCard from "../features/AnimatedAnswerCard.js";
import AnswerCard from "../features/AnswerCard";
import RandomQuestionSlice from "../features/RandomQuestionSlice";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";
import NextQuestionCard from "../features/NextQuestionCard.js";

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
    const randomNum = Math.floor(Math.random() * topicToTopicArrayMap[currentQuestion.topic].length)
    console.log(randomNum)
    setCurrentQuestion({ ...currentQuestion, id: randomNum });
    setAnswer(null);
  };

  const setTopic = (topic) => {
    setCurrentQuestion({ ...currentQuestion, topic });
    setAnswer(null);
  };

  const showAnswer = () => {
    setAnswer(currentQuestionContent.answer);
  };

  return (
    <>
      <h1 className="text-center mb-5">Theory Questions</h1>
      <div className="theory-topics grid w3-container">
        <div>
          <h2 className="mb-5">Choose A Topic</h2>
          {topicsArray.map((topic) => {
            return (
              <div className="mb-3" onClick={() => setTopic(topic)}>
                <TheoryOptionsCard topic={topic} />
              </div>
            );
          })}
        </div>
        <div>
          <div className="mb-3">
            <h2 className="mb-5">Question</h2>
            <TheoryCard
              question={currentQuestionContent.question}
              image={currentQuestionContent.image}
            />
          </div>
          <div className="mb-3" onClick={() => onClickNext()}>
            <NextQuestionCard />
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h2 className="mb-5">Answer</h2>
            <AnswerCard answer={answer} />
          </div>
          <div onClick={() => showAnswer()}>
            <AnimatedAnswerCard text={"Ready to see the answer? Click here."} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatedTheoryPage;

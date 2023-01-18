import TheoryOptionsCard from "./cards/TheoryOptionsCard.js";
import TheoryCard from "./cards/TheoryCard.js";
import AnimatedAnswerCard from "./cards/AnimatedAnswerCard.js";
import { useState } from "react";
import {
  ModeQuestions,
  KeySignatureQuestions,
  ChordQuestions,
  IntervalQuestions,
} from "../QUESTIONS/THEORYQUESTIONS.js";
import NextQuestionCard from "./cards/NextQuestionCard.js";

const UpdatedTheoryPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    topic: "Intervals",
    id: 1,
  });

  const [answer, setAnswer] = useState(null);
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

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
    setIsAnswerShowing(false)
  };

  const showAnswer = () => {
    setAnswer(currentQuestionContent.answer);
  };

  return (
    <>
      <h1 className="text-center mb-4">Theory Questions</h1>
      <container className="theoryOptionsGrid">
        <div className="mb-5">
          <h2 className="text-center">Choose A Topic</h2>
          {topicsArray.map((topic) => {
            return (
              <div
                className="theoryOptionsItem"
                onClick={() => setTopic(topic)}
              >
                <TheoryOptionsCard topic={topic} />
              </div>
            );
          })}
        </div>
        <div className="mb-5">
          <h2 className="text-center">Question</h2>
          <div className="mb-3">
            <TheoryCard
              question={currentQuestionContent.question}
              image={currentQuestionContent.image}
            />
          </div>
          <div
            onClick={() => {
              onClickNext();
              setIsAnswerShowing(false);
            }}
          >
            <NextQuestionCard />
          </div>
        </div>
        <div className="theoryOptionsItem">
          <h2 className="text-center">Answer</h2>

          <div
            onClick={() => {
              showAnswer();
              setIsAnswerShowing(true);
            }}
          >
            <AnimatedAnswerCard
              text={
                isAnswerShowing
                  ? answer
                  : "Ready to see the answer? Click here."
              }
            />
          </div>
        </div>
      </container>
    </>
  );
};

export default UpdatedTheoryPage;

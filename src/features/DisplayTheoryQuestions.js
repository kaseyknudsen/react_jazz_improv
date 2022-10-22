import TheoryCard from "./TheoryCard";

export const DisplayTheoryQuestion = (topicArray) => {
  const { image, title, question, answer } = topicArray;
  return <TheoryCard image={image} title={title} question={question} answer={answer} />
};

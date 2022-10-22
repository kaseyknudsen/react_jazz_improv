export const RandomQuestionSlice = (questionsArray) => {
  const randomQuestion =
    questionsArray[Math.floor(Math.random() * questionsArray.length)];
  return randomQuestion;
};

export default RandomQuestionSlice;

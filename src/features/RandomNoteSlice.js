
export const getRandomNote = (noteArray) => {
  const randomNote =
    noteArray[Math.floor(Math.random() * noteArray.length)];
  return randomNote;
};





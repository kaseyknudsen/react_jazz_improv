import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";

export const getRandomNote = () => {
  const randomNote =
    AltoSaxChromaticScaleArray[Math.floor(Math.random() * AltoSaxChromaticScaleArray.length)];
  return randomNote;
};





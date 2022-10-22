import { ChromaticScaleArray } from "../EARTRAINING/earTrainingData";
import { useState, useEffect } from "react";

export const getRandomNote = () => {
  const randomNote =
    ChromaticScaleArray[Math.floor(Math.random() * ChromaticScaleArray.length)];
  return randomNote;
};





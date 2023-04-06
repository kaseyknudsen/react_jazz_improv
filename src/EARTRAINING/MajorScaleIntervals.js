import { altoSaxSounds } from "./AltoSaxSounds";
import { trumpetSounds } from "./TrumpetSounds";
import { tenorSaxSounds } from "./TenorSaxSounds";
import { tromboneSounds } from "./TromboneSounds";

import Bb_to_C from "../EARTRAINING/Bb_MajorScale/Bb_C.png";
import Bb_to_D from "../EARTRAINING/Bb_MajorScale/Bb_D.png";
import Bb_to_Eb from "../EARTRAINING/Bb_MajorScale/Bb_Eb.png";
import Bb_to_F from "../EARTRAINING/Bb_MajorScale/Bb_F.png";
import Bb_to_G from "../EARTRAINING/Bb_MajorScale/Bb_G.png";
import Bb_to_A from "../EARTRAINING/Bb_MajorScale/Bb_A.png";
import Bb_to_Bb from "../EARTRAINING/Bb_MajorScale/Bb_Bb.png";

import descending_Bb_to_A from "../EARTRAINING/descending_major_intervals/descending_min_2nd.png";
import descending_Bb_to_G from "../EARTRAINING/descending_major_intervals/descending_min_3rd.png";
import descending_Bb_to_F from "../EARTRAINING/descending_major_intervals/descending_perf_4th.png";
import descending_Bb_to_Eb from "../EARTRAINING/descending_major_intervals/descending_perf_5th.png";
import descending_Bb_to_D from "../EARTRAINING/descending_major_intervals/descending_min_6th.png";
import descending_Bb_to_C from "../EARTRAINING/descending_major_intervals/descending_min_7th.png";
import descending_Bb_to_Bb from "../EARTRAINING/descending_major_intervals/descending_perf_8ve.png";



export const getMajorScaleIntervalPairs = (instrument) => {
  let instrumentSounds;
  if (instrument === 'alto sax') {
    instrumentSounds = altoSaxSounds
  } else if (instrument === 'trumpet') {
    instrumentSounds = trumpetSounds
  } else if (instrument === 'tenor sax') {
    instrumentSounds = tenorSaxSounds
  } else if (instrument === 'trombone') {
    instrumentSounds = tromboneSounds
  }

  const scaleDegree = {
    1: instrumentSounds.middle_Bb,
    2: instrumentSounds.middle_C,
    3: instrumentSounds.middle_D,
    4: instrumentSounds.middle_Eb,
    5: instrumentSounds.middle_F,
    6: instrumentSounds.high_G,
    7: instrumentSounds.high_A,
    8: instrumentSounds.high_Bb,
  };

  return [
    {
      id: 1,
      title: "Ascending Major 2nd",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[2],
      image: Bb_to_C,
    },
    {
      id: 2,
      title: "Ascending Major 3rd",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[3],
      image: Bb_to_D,
    },
    {
      id: 3,
      title: "Ascending Perfect 4th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[4],
      image: Bb_to_Eb,
    },
    {
      id: 4,
      title: "Ascending Perfect 5th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[5],
      image: Bb_to_F,
    },
    {
      id: 5,
      title: "Ascending Major 6th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[6],
      image: Bb_to_G,
    },
    {
      id: 6,
      title: "Ascending Major 7th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[7],
      image: Bb_to_A,
    },
    {
      id: 7,
      title: "Ascending Perfect Octave",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[8],
      image: Bb_to_Bb,
    },
    {
      id: 8,
      title: "Descending Minor 2nd",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[7],
      image: descending_Bb_to_A,
    },
    {
      id: 9,
      title: "Descending Minor 3rd",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[6],
      image: descending_Bb_to_G,
    },
    {
      id: 10,
      title: "Descending Perfect 4th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[5],
      image: descending_Bb_to_F,
    },
    {
      id: 11,
      title: "Descending Perfect 5th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[4],
      image: descending_Bb_to_Eb,
    },
    {
      id: 12,
      title: "Descending Minor 6th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[3],
      image: descending_Bb_to_D,
    },
    {
      id: 13,
      title: "Descending Minor 7th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[2],
      image: descending_Bb_to_C,
    },
    {
      id: 14,
      title: "Descending Perfect Octave",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[1],
      image: descending_Bb_to_Bb,
    },
  ]
};

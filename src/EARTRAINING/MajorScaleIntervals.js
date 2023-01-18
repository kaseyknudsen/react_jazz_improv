import Middle_Bb from "../EARTRAINING/chr_scale/Middle-Bb.mp3";
import Middle_C from "../EARTRAINING/chr_scale/Middle-C.mp3";
import Middle_D from "../EARTRAINING/chr_scale/Middle-D.mp3";
import Middle_Eb from "../EARTRAINING/chr_scale/Middle-Eb.mp3";
import Middle_F from "../EARTRAINING/chr_scale/Middle-F.mp3";
import High_G from "../EARTRAINING/chr_scale/High-G.mp3";
import High_A from "../EARTRAINING/chr_scale/High-A.mp3";
import High_Bb from "../EARTRAINING/chr_scale/High-Bb.mp3";

import Bb_to_C from "../EARTRAINING/Bb_MajorScale/Bb_C.png";
import Bb_to_D from "../EARTRAINING/Bb_MajorScale/Bb_D.png";
import Bb_to_Eb from "../EARTRAINING/Bb_MajorScale/Bb_Eb.png";
import Bb_to_F from "../EARTRAINING/Bb_MajorScale/Bb_F.png";
import Bb_to_G from "../EARTRAINING/Bb_MajorScale/Bb_G.png";
import Bb_to_A from "../EARTRAINING/Bb_MajorScale/Bb_A.png";
import Bb_to_Bb from "../EARTRAINING/Bb_MajorScale/Bb_Bb.png";

import Low_Bb from "../EARTRAINING/chr_scale/Low-Bb.mp3";
import Low_C from "../EARTRAINING/chr_scale/Low-C.mp3";
import Low_D from "../EARTRAINING/chr_scale/Low-D.mp3";
import Low_Eb from "../EARTRAINING/chr_scale/Low-Eb.mp3";
import Low_F from "../EARTRAINING/chr_scale/Low-F.mp3";
import Middle_G from "../EARTRAINING/chr_scale/Middle-G.mp3";
import Middle_A from "../EARTRAINING/chr_scale/Middle-A.mp3";

import descending_Bb_to_A from "../EARTRAINING/descending_major_intervals/descending_min_2nd.png";
import descending_Bb_to_G from "../EARTRAINING/descending_major_intervals/descending_min_3rd.png";
import descending_Bb_to_F from "../EARTRAINING/descending_major_intervals/descending_perf_4th.png";
import descending_Bb_to_Eb from "../EARTRAINING/descending_major_intervals/descending_perf_5th.png";
import descending_Bb_to_D from "../EARTRAINING/descending_major_intervals/descending_min_6th.png";
import descending_Bb_to_C from "../EARTRAINING/descending_major_intervals/descending_min_7th.png";
import descending_Bb_to_Bb from "../EARTRAINING/descending_major_intervals/descending_perf_8ve.png";

export const altoSaxBbMajorScale = [
  {
    id: 1,
    title: "Ascending Major 2nd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_C),
    image: Bb_to_C,
  },
  {
    id: 2,
    title: "Ascending Major 3rd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_D),
    image: Bb_to_D,
  },
  {
    id: 3,
    title: "Ascending Perfect 4th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_Eb),
    image: Bb_to_Eb,
  },
  {
    id: 4,
    title: "Ascending Perfect 5th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_F),
    image: Bb_to_F,
  },
  {
    id: 5,
    title: "Ascending Major 6th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_G),
    image: Bb_to_G,
  },
  {
    id: 6,
    title: "Ascending Major 7th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_A),
    image: Bb_to_A,
  },
  {
    id: 7,
    title: "Ascending Perfect Octave",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_Bb),
    image: Bb_to_Bb,
  },
  {
    id: 8,
    title: "Descending Minor 2nd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_A),
    image: descending_Bb_to_A,
  },
  {
    id: 9,
    title: "Descending Minor 3rd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_G),
    image: descending_Bb_to_G,
  },
  {
    id: 10,
    title: "Descending Perfect 4th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_F),
    image: descending_Bb_to_F,
  },
  {
    id: 11,
    title: "Descending Perfect 5th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_Eb),
    image: descending_Bb_to_Eb,
  },
  {
    id: 12,
    title: "Descending Minor 6th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_D),
    image: descending_Bb_to_D,
  },
  {
    id: 13,
    title: "Descending Minor 7th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_C),
    image: descending_Bb_to_C,
  },
  {
    id: 14,
    title: "Descending Perfect Octave",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_Bb),
    image: descending_Bb_to_Bb,
  },
];

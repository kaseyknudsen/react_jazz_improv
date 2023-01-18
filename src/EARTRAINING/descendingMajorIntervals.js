import Low_Bb from "../EARTRAINING/chr_scale/Low-Bb.mp3";
import Low_C from "../EARTRAINING/chr_scale/Low-C.mp3";
import Low_D from "../EARTRAINING/chr_scale/Low-D.mp3";
import Low_Eb from "../EARTRAINING/chr_scale/Low-Eb.mp3";
import Low_F from "../EARTRAINING/chr_scale/Low-F.mp3";
import Middle_G from "../EARTRAINING/chr_scale/Middle-G.mp3";
import Middle_A from "../EARTRAINING/chr_scale/Middle-A.mp3";
import Middle_Bb from "../EARTRAINING/chr_scale/Middle-Bb.mp3";

import Bb_to_A from "../EARTRAINING/descending_major_intervals/descending_min_2nd.png";
import Bb_to_G from "../EARTRAINING/descending_major_intervals/descending_min_3rd.png";
import Bb_to_F from "../EARTRAINING/descending_major_intervals/descending_perf_4th.png";
import Bb_to_Eb from "../EARTRAINING/descending_major_intervals/descending_perf_5th.png";
import Bb_to_D from "../EARTRAINING/descending_major_intervals/descending_min_6th.png";
import Bb_to_C from "../EARTRAINING/descending_major_intervals/descending_min_7th.png";
import Bb_to_Bb from "../EARTRAINING/descending_major_intervals/descending_perf_8ve.png";

export const descending_intervals_Bb_major_scale = [
  {
    id: 1,
    title: "Minor 2nd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_A),
    image: Bb_to_A,
  },
  {
    id: 2,
    title: "Minor 3rd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_G),
    image: Bb_to_G,
  },
  {
    id: 3,
    title: "Perfect 4th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_F),
    image: Bb_to_F,
  },
  {
    id: 4,
    title: "Perfect 5th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_Eb),
    image: Bb_to_Eb,
  },
  {
    id: 5,
    title: "Major 6th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_D),
    image: Bb_to_D,
  },
  {
    id: 6,
    title: "Major 7th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_C),
    image: Bb_to_C,
  },
  {
    id: 7,
    title: "Perfect Octave",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_Bb),
    image: Bb_to_Bb,
  },
];

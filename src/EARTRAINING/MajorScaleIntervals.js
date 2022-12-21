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

export const altoSaxBbMajorScale = [
  { id: 1,
    title: "Major 2nd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_C),
    image: Bb_to_C,
  },
  { id: 2,
    title: "Major 3rd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_D),
    image: Bb_to_D,
  },
  { id: 3,
    title: "Perfect 4th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_Eb),
    image: Bb_to_Eb,
  },
  { id: 4,
    title: "Perfect 5th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_F),
    image: Bb_to_F,
  },
  { id: 5,
    title: "Major 6th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_G),
    image: Bb_to_G,
  },
  { id: 6,
    title: "Major 7th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_A),
    image: Bb_to_A,
  },
  { id: 7,
    title: "Perfect Octave",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(High_Bb),
    image: Bb_to_Bb,
  },
];

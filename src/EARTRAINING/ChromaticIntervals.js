import { altoSaxSounds } from "./AltoSaxSounds";
import { trumpetSounds } from "./TrumpetSounds";
import { tenorSaxSounds } from "./TenorSaxSounds";
import { tromboneSounds } from "./TromboneSounds";

//ascending images
import asc_Bb_to_B from "../EARTRAINING/ascending_non_diatonic_intervals/ascending_min_2nd.png";
import asc_Bb_to_Db from "../EARTRAINING/ascending_non_diatonic_intervals/ascending_min_3rd.png";
import asc_Bb_to_E from "../EARTRAINING/ascending_non_diatonic_intervals/ascending_tritone.png";
import asc_Bb_to_Gb from "../EARTRAINING/ascending_non_diatonic_intervals/ascending_min_6th.png";
import asc_Bb_to_Ab from "../EARTRAINING/ascending_non_diatonic_intervals/ascending_min_7th.png";

//descending images
import desc_Bb_to_Ab from "../EARTRAINING/descending_non_diatonic_intervals/descending_maj_2nd.png";
import desc_Bb_to_Gb from "../EARTRAINING/descending_non_diatonic_intervals/descending_maj_3rd.png";
import desc_Bb_to_E from "../EARTRAINING/descending_non_diatonic_intervals/descending_tritone.png";
import desc_Bb_to_Db from "../EARTRAINING/descending_non_diatonic_intervals/descending_maj_6th.png";
import desc_Bb_to_B from "../EARTRAINING/descending_non_diatonic_intervals/descending_maj_7th.png";

//audio files
import Low_Bb from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Low-Bb.mp3";
import Low_B from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Low-B.mp3";
import Low_Db from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Low-Db.mp3";
import Low_E from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Low-E.mp3";
import Middle_Gb from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Low-Gb.mp3";
import Middle_Ab from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Middle-Ab.mp3";
import Middle_Bb from "../EARTRAINING/all_chromatic_scales/alto_sax_chromatic_scale/Middle-Bb.mp3";

export const getChromaticScaleIntervalPairs = (instrument) => {
  let instrumentSounds;
  if (instrument === "alto sax") {
    instrumentSounds = altoSaxSounds;
  } else if (instrument === "trumpet") {
    instrumentSounds = trumpetSounds;
  } else if (instrument === "tenor sax") {
    instrumentSounds = tenorSaxSounds;
  } else if (instrument === "trombone") {
    instrumentSounds = tromboneSounds;
  }

  const scaleDegree = {
    1: instrumentSounds.low_Bb,
    2: instrumentSounds.low_B,
    3: instrumentSounds.low_Db,
    4: instrumentSounds.low_E,
    6: instrumentSounds.middle_Gb,
    7: instrumentSounds.middle_Ab,
    8: instrumentSounds.high_Bb
  }

  return [
    {
      id: 1,
      title: "Ascending Minor 2nd",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[2],
      image: asc_Bb_to_B,
    },
    {
      id: 2,
      title: "Ascending Minor 3rd",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[3],
      image: asc_Bb_to_Db,
    },
    {
      id: 3,
      title: "Ascending Tri-tone (augmented 4th)",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[4],
      image: asc_Bb_to_E,
    },
    {
      id: 4,
      title: "Ascending Minor 6th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[6],
      image: asc_Bb_to_Gb,
    },
    {
      id: 5,
      title: "Ascending Minor 7th",
      audioFile1: scaleDegree[1],
      audioFile2: scaleDegree[7],
      image: asc_Bb_to_Ab,
    },
    {
      id: 6,
      title: "Descending Major 2nd",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[7],
      image: desc_Bb_to_Ab,
    },
    {
      id: 7,
      title: "Descending Major 3rd",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[6],
      image: desc_Bb_to_Gb,
    },
    {
      id: 8,
      title: "Descending Tri-tone (diminished 5th)",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[4],
      image: desc_Bb_to_E,
    },
    {
      id: 9,
      title: "Descending Major 6th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[3],
      image: desc_Bb_to_Db,
    },
    {
      id: 10,
      title: "Descending Major 7th",
      audioFile1: scaleDegree[8],
      audioFile2: scaleDegree[2],
      image: desc_Bb_to_B,
    },
  ];
};

export const chromaticIntervals = [
  {
    id: 1,
    title: "Ascending Minor 2nd",
    audioFile1: new Audio(Low_Bb),
    audioFile2: new Audio(Low_B),
    image: asc_Bb_to_B,
  },
  {
    id: 2,
    title: "Ascending Minor 3rd",
    audioFile1: new Audio(Low_Bb),
    audioFile2: new Audio(Low_Db),
    image: asc_Bb_to_Db,
  },
  {
    id: 3,
    title: "Ascending Tri-tone (augmented 4th)",
    audioFile1: new Audio(Low_Bb),
    audioFile2: new Audio(Low_E),
    image: asc_Bb_to_E,
  },
  {
    id: 4,
    title: "Ascending Minor 6th",
    audioFile1: new Audio(Low_Bb),
    audioFile2: new Audio(Middle_Gb),
    image: asc_Bb_to_Gb,
  },
  {
    id: 5,
    title: "Ascending Minor 7th",
    audioFile1: new Audio(Low_Bb),
    audioFile2: new Audio(Middle_Ab),
    image: asc_Bb_to_Ab,
  },
  {
    id: 6,
    title: "Descending Major 2nd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_Ab),
    image: desc_Bb_to_Ab,
  },
  {
    id: 7,
    title: "Descending Major 3rd",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Middle_Gb),
    image: desc_Bb_to_Gb,
  },
  {
    id: 8,
    title: "Descending Tri-tone (diminished 5th)",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_E),
    image: desc_Bb_to_E,
  },
  {
    id: 9,
    title: "Descending Major 6th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_Db),
    image: desc_Bb_to_Db,
  },
  {
    id: 10,
    title: "Descending Major 7th",
    audioFile1: new Audio(Middle_Bb),
    audioFile2: new Audio(Low_B),
    image: desc_Bb_to_B,
  },
];

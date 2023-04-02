import concert_F from "./all_chromatic_scales/trumpet_chr_scale/concert_F.mp3";
import concert_G from "./all_chromatic_scales/trumpet_chr_scale/concert_G.mp3";
import concert_A from "./all_chromatic_scales/trumpet_chr_scale/concert_A.mp3";
import concert_Bb from "./all_chromatic_scales/trumpet_chr_scale/concert_Bb.mp3";
import concert_C from "./all_chromatic_scales/trumpet_chr_scale/concert_C.mp3";
import concert_D from "./all_chromatic_scales/trumpet_chr_scale/concert_D.mp3";
import concert_Eb from "./all_chromatic_scales/trumpet_chr_scale/concert_Eb.mp3";
import concert_B from "./all_chromatic_scales/trumpet_chr_scale/concert_B.mp3";
import concert_Db from "./all_chromatic_scales/trumpet_chr_scale/concert_Db.mp3";
import concert_E from "./all_chromatic_scales/trumpet_chr_scale/concert_E.mp3";
import concert_High_Gb from "./all_chromatic_scales/trumpet_chr_scale/concert_High_Gb.mp3";
import concert_High_Ab from "./all_chromatic_scales/trumpet_chr_scale/concert_High_Ab.mp3";

export const trumpetSounds = {
  middle_Bb: new Audio(concert_Bb),
  middle_C: new Audio(concert_C),
  middle_D: new Audio(concert_D),
  middle_Eb: new Audio(concert_Eb),
  middle_F: new Audio(concert_F),
  high_G: new Audio(concert_G),
  high_A: new Audio(concert_A),
  high_Bb: new Audio(concert_Bb),
  //for chromatic intervals
  low_Bb: new Audio(concert_Bb),
  low_B: new Audio(concert_B),
  low_Db: new Audio(concert_Db),
  low_E: new Audio(concert_E),
  middle_Gb: new Audio(concert_High_Gb),
  middle_Ab: new Audio(concert_High_Ab),
};

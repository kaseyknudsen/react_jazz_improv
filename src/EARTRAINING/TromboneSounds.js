import middle_Bb from "./all_chromatic_scales/trombone_chr_scale/bone_low_Bb.mp3";
import middle_C from "./all_chromatic_scales/trombone_chr_scale/bone_low_C.mp3";
import middle_D from "./all_chromatic_scales/trombone_chr_scale/bone_low_D.mp3";
import middle_Eb from "./all_chromatic_scales/trombone_chr_scale/bone_Eb.mp3";
import middle_F from "./all_chromatic_scales/trombone_chr_scale/bone_F.mp3";
import high_G from "./all_chromatic_scales/trombone_chr_scale/bone_G.mp3";
import high_A from "./all_chromatic_scales/trombone_chr_scale/bone_A.mp3";
import high_Bb from "./all_chromatic_scales/trombone_chr_scale/bone_Bb.mp3";
import low_B from "./all_chromatic_scales/trombone_chr_scale/bone_low_B.mp3";
import low_Db from "./all_chromatic_scales/trombone_chr_scale/bone_low_Db.mp3";
import E from "./all_chromatic_scales/trombone_chr_scale/bone_E.mp3";
import Gb from "./all_chromatic_scales/trombone_chr_scale/bone_Gb.mp3";
import Ab from "./all_chromatic_scales/trombone_chr_scale/bone_Ab.mp3";


export const tromboneSounds = {
  middle_Bb: new Audio(middle_Bb),
  middle_C: new Audio(middle_C),
  middle_D: new Audio(middle_D),
  middle_Eb: new Audio(middle_Eb),
  middle_F: new Audio(middle_F),
  high_G: new Audio(high_G),
  high_A: new Audio(high_A),
  high_Bb: new Audio(high_Bb),
  //for chromatic intervals
  low_Bb: new Audio(middle_Bb),
  low_B: new Audio(low_B),
  low_Db: new Audio(low_Db),
  low_E: new Audio(E),
  middle_Gb: new Audio(Gb),
  middle_Ab: new Audio(Ab),
};

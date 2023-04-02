import low_Bb from "./all_chromatic_scales/trombone_chr_scale/bone_low_Bb.mp3";
import low_C from "./all_chromatic_scales/trombone_chr_scale/bone_low_C.mp3";
import low_D from "./all_chromatic_scales/trombone_chr_scale/bone_low_D.mp3";
import Eb from "./all_chromatic_scales/trombone_chr_scale/bone_Eb.mp3";
import F from "./all_chromatic_scales/trombone_chr_scale/bone_F.mp3";
import G from "./all_chromatic_scales/trombone_chr_scale/bone_G.mp3";
import A from "./all_chromatic_scales/trombone_chr_scale/bone_A.mp3";
import Bb from "./all_chromatic_scales/trombone_chr_scale/bone_Bb.mp3";

export const tromboneSounds = {
  middle_Bb: new Audio(low_Bb),
  middle_C: new Audio(low_C),
  middle_D: new Audio(low_D),
  middle_Eb: new Audio(Eb),
  middle_F: new Audio(F),
  high_G: new Audio(G),
  high_A: new Audio(A),
  high_Bb: new Audio(Bb),
}
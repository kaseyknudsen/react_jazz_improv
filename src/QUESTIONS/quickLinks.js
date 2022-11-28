
import ear_training_image from "../app/images/quick-link-images/ear_training_image.png"
import theory_image from "../app/images/quick-link-images/theory_image.png"
import practice_time_image from "../app/images/quick-link-images/practice_time_image.png"

export const quickLinks = [
  {
    id: 0,
    image: ear_training_image,
    text: "I want to improve my ear, but I'm not sure where to start.",
    route: "/ear_training",
  },
  {
    id: 1,
    image: theory_image,
    text: "How can I improve my knowledge of music theory?",
    route: "/theory_page",
  },

  {
    id: 2,
    image: practice_time_image,
    text: "How do I organize my practice time?",
    route: "/practice_routines",
  },
];

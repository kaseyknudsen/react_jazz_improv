import SubHeader from "../components/Subheader";
import DisplayPracticeRoutines from "../features/DisplayPracticeRoutines";

const PracticeRoutinesPage = () => {
  return (
    <div>
      <SubHeader current="Practice Routines" />
      <DisplayPracticeRoutines />
    </div>
  );
};

export default PracticeRoutinesPage;

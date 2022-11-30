import SubHeader from "../components/Subheader";
import DisplayAndPlayIntervals from "../features/DisplayAndPlayIntervals";
import DisplayAndPlayIntervalsRefactor from "../features/DisplayAndPlayIntervalsRefactor";

const EarTrainingPage = () => {
  return (
    <div>
      <SubHeader current="Ear Training" />
      <DisplayAndPlayIntervalsRefactor />
    </div>
  );
};

export default EarTrainingPage;

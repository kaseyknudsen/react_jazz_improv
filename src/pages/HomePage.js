import AboutMe from "../components/AboutMe";
import HomePageQuickLinks from "../features/HomePageQuickLinks";
import SubHeader from "../components/Subheader";

const HomePage = () => {
  return (
    <div>
      <SubHeader current="Home" />
      <AboutMe />
      <HomePageQuickLinks />
    </div>
  );
};

export default HomePage;

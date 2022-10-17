import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageQuickLinks from "../features/HomePageQuickLinks";

const HomePage = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <HomePageQuickLinks />
            <Footer />
        </div>
    )
}

export default HomePage;
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Home from "./Home";
import ProjectsSection from "./ProjectsSection";
import "./Home.css";

const MainSection = () => (
  <div className="main-section w-full">
    <Home />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <Footer />
  </div>
);

export default MainSection;

import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Home from "./Home";
import ProjectsSection from "./ProjectsSection";
import "./Home.css";
import ImageSection from "./ImageSection";

const MainSection = () => (
  <div className="main-section w-full">
    <Home />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <ImageSection imageSrc="assets/5.png" altText="" />
    <Footer />
  </div>
);

export default MainSection;

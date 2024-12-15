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

    <ImageSection
      imageSrc="/src/assets/5.png"
      altText="A descriptive image of the project"
    />
    <Footer />
  </div>
);

export default MainSection;
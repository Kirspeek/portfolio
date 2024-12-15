import SectionTitle from "./SectionTitle";
import SkillsSection from "./SkillsSection";

const AboutSection = () => (
  <div className="section min-h-screen w-full items-center">
    <div className="about" id="about">
      {" "}
      <SectionTitle sectionNumber={"01"} name="About Me" />
      <div />
      <SkillsSection />
    </div>
  </div>
);

export default AboutSection;

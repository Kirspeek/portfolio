import "./SkillsSection.css";
import MyCodeComponent from "./MyCodeComponent";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="about-intro">
        Hello there!
        <br />
        <br />
        I’m a passionate <span className="ones">Frontend Engineer</span> with 2
        years of experience specializing in building modular, scalable, and
        visually stunning user experiences. While my expertise lies in frontend
        development, I also have a solid understanding of full-stack
        technologies.
        <br />
        <br />
        As a developer, I thrive on creating dynamic and responsive web
        applications using <span className="twos">React</span> and
        <span className="threes"> Next.js</span>. My expertise also extends to
        various modern web development technologies, and I continuously
        challenge myself through diverse projects.
        <br />
        <br />I love to be part of a forward-thinking team where I can
        contribute to <span className="four">innovative projects</span> and
        continue to <span className="five">grow as a developer</span>. I am
        enthusiastic about continuous learning and always eager to take on new
        challenges that <span className="six">push my boundaries</span>.
        <br />
        Let's connect and create something amazing together!
      </div>

      <div className="code-right">
        <MyCodeComponent />
      </div>
    </div>
  );
};

export default SkillsSection;

import { useState } from "react";
import { FaAddressCard, FaBriefcase, FaCode } from "react-icons/fa";
import SectionButton from "./SectionButton";
import "./Sidebar.css";
import IconGitHub from "./icons/IconGitHub";
import IconGmail from "./icons/IconGmail";
import IconLinkedin from "./icons/IconLinkedin";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionClick = (sectionName: string) => {
    setCurrentSection(sectionName);
  };

  const handleMobileSectionClick = (sectionName: string) => {
    handleSectionClick(sectionName);

    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Automatically close the mobile sidebar after 5 seconds
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 200);
  };

  const sections = [
    { name: "about", icon: FaAddressCard, label: "About" },
    { name: "projects", icon: FaCode, label: "Projects" },
    { name: "experience", icon: FaBriefcase, label: "Experience" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen py-5 px-8">
        <div className="hidden md:flex flex-col">
          {/* Section Buttons */}
          <div className="flex-1 flex items-center justify-center">
            <div className="nav-section flex-1 flex flex-col items-center">
              {sections.map((section) => (
                <SectionButton
                  key={section.name}
                  sectionName={section.name}
                  icon={section.icon}
                  label={section.label}
                  isActive={currentSection === section.name}
                  onClick={handleSectionClick}
                />
              ))}
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://github.com/Kirspeek"
              target="_blank"
              className="icon-link"
            >
              <IconGitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/irynacherepenko/"
              target="_blank"
              className="icon-link"
            >
              <IconLinkedin />
            </a>
            <a href="mailto:cherepenko.iryna@gmail.com" className="icon-link">
              <IconGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <button
        className="hamburger-menu md:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>
      {isMobileMenuOpen && (
        <div
          className={`sidebar fixed inset-0 z-50 flex justify-end ${
            isMobileMenuOpen ? "open" : "closed"
          }`}
        >
          <div className="mobile-sidebar h-full w-full max-w-xs">
            <div className="flex md:hidden flex-col h-full w-full">
              {/* Section Buttons */}
              <div className="flex-1 flex flex-col pt-24">
                {sections.map((section) => (
                  <button
                    key={section.name}
                    className="section-button-mobile"
                    onClick={() => handleMobileSectionClick(section.name)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Social Buttons */}
              <div className="icon-links-container">
                <a
                  href="https://github.com/Kirspeek"
                  target="_blank"
                  className="icon-link"
                >
                  <IconGitHub />
                </a>
                <a
                  href="https://www.linkedin.com/in/irynacherepenko/"
                  target="_blank"
                  className="icon-link"
                >
                  <IconLinkedin />
                </a>
                <a
                  href="mailto:cherepenko.iryna@gmail.com"
                  className="icon-link"
                >
                  <IconGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

import { useState, useEffect, useRef } from "react";
import CompanyHoverCard from "./CompanyHoverCard";
import "./ExperienceSection.css";
import SectionTitle from "./SectionTitle";

function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const tab1ContentHeight =
        contentRef.current.querySelector(".tab1-content")?.scrollHeight || 0;
      const tab2ContentHeight =
        contentRef.current.querySelector(".tab2-content")?.scrollHeight || 0;
      const tab3ContentHeight =
        contentRef.current.querySelector(".tab3-content")?.scrollHeight || 0;
      const maxHeight = Math.max(
        tab1ContentHeight,
        tab2ContentHeight,
        tab3ContentHeight
      );
      contentRef.current.style.minHeight = `${maxHeight + 15}px`;
    }
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setFadeClass("fade-out");
      setTimeout(() => {
        setActiveTab(tab);
        setFadeClass("fade-in");
      }, 500);
    }
  };

  return (
    <div
      id="experience"
      className="section min-h-screen w-full px-8 px-4 flex items-center"
    >
      <div className="flex flex-col justify-center w-full">
        <SectionTitle sectionNumber="03" name="Where I've Worked" />

        <div className="tabs-container pt-12 flex flex-col md:flex-row">
          {/* Desktop Buttons */}
          <div className="tabs-list hidden invisible md:flex flex-col md:visible min-w-48 items-center justify-center">
            <button
              className={`tabs-trigger w-full ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              Divergent
            </button>
            <button
              className={`tabs-trigger w-full ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              Code Academy
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-row md:hidden md:invisible w-full justify-between px-8 pb-8">
            <button
              className={`tabs-trigger-mobile ${
                activeTab === "tab1" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab1")}
            >
              Divergent
            </button>
            <button
              className={`tabs-trigger-mobile ${
                activeTab === "tab2" ? "active" : ""
              }`}
              onClick={() => handleTabChange("tab2")}
            >
              Code Academy
            </button>
          </div>

          {/* Content Area */}
          <div
            className="tabs-content-container max-w-full lg:max-w-xl"
            ref={contentRef}
          >
            {activeTab === "tab1" && (
              <div className={`tabs-content tab1-content ${fadeClass}`}>
                <div className="exp-title">
                  Full Stack Engineer{" "}
                  <strong>
                    <CompanyHoverCard
                      label="Divergent"
                      description="Divergent is a dynamic startup company with a strong track record in developing innovative platforms, leveraging cutting-edge technology to solve complex challenges and drive impactful solutions for diverse industries."
                      followersCount="16M"
                      employeesCount="10K+"
                      link="https://www.linkedin.com/company/divergent3d/"
                    />
                  </strong>
                </div>
                <p className="exp-date">April 2024 - Present</p>
                <ul className="exp-bullets">
                  <li>
                    Spearheaded the development of a comprehensive email
                    management platform, utilizing React, Next.js, and
                    TypeScript for the frontend, alongside Node.js and Nest.js
                    for the backend, offering core functionalities like Email
                    Delivery Monitoring, Blacklist Monitoring, and Safe Email
                    Warming.
                  </li>
                  <li>
                    Designed and implemented intuitive user interfaces and
                    advanced data visualizations, enhancing user experience and
                    enabling actionable insights for email delivery and
                    performance metrics.
                  </li>
                  <li>
                    Developed and optimized robust backend services to ensure
                    scalable, secure, and high-performance functionalities,
                    significantly improving data processing and system
                    reliability.
                  </li>
                  <li>
                    Integrated monitoring features for email blacklists,
                    empowering users to proactively identify and address
                    potential delivery issues, improving overall email
                    deliverability rates.
                  </li>
                  <li>
                    Engineered a Safe Email Warming feature that ensures smooth
                    IP and domain warming, fostering credibility and trust with
                    email service providers.
                  </li>
                  <li>
                    Conducted extensive unit and integration testing across the
                    platform, achieving over 90% code coverage and ensuring the
                    stability and reliability of the application.
                  </li>
                  <li>
                    Collaborated closely with cross-functional teams to gather
                    requirements, identify pain points, and deliver user-focused
                    solutions that align with client needs and industry best
                    practices.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "tab2" && (
              <div className={`tabs-content tab2-content ${fadeClass}`}>
                <div className="exp-title">
                  Junior Front End Developer{" "}
                  <strong>
                    <CompanyHoverCard
                      label="Code Academy"
                      description="Mate Academy is an innovative EdTech startup revolutionizing IT education through its gamified, AI-friendly LMS platform. By offering free training until employment, Mate prepares students to meet job market demands, achieving an 80% job placement rate and empowering over 4,000 graduates to build successful IT careers."
                      followersCount="5M"
                      employeesCount="10K+"
                      link="https://www.linkedin.com/school/mateacademy"
                    />
                  </strong>
                </div>
                <p className="exp-date">December 2022 - April 2023</p>
                <ul className="exp-bullets">
                  <li>
                    Enhanced skills in HTML, CSS, JavaScript, and TypeScript by
                    building responsive and user-friendly web applications
                    tailored to specific project tasks.
                  </li>
                  <li>
                    Developed adaptive, mobile-first layouts to ensure
                    consistent and intuitive user experiences across various
                    devices and browsers.
                  </li>
                  <li>
                    Utilized JavaScript and TypeScript to implement dynamic
                    functionality, creating clean, maintainable, and type-safe
                    code for seamless interface logic.
                  </li>
                  <li>
                    Designed and implemented smooth CSS animations and
                    transitions, improving user interactions while adhering to
                    design standards without compromising performance.
                  </li>
                  <li>
                    Collaborated with teams using Git for version control,
                    ensuring code stability, efficient project management, and
                    seamless integration across development stages.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;

import { forwardRef, useEffect, useRef } from "react";
import IconExternal from "./icons/IconExternal";
import IconGitHub from "./icons/IconGitHub";
import gameHubThumbnail from "/public/assets/game-hub-thumbnail.png";
import gameHubGif from "/public/assets/gameHubDemoGif.gif";
import issueTrackerThumbnail from "/public/assets/IssueTrackerThumbnail.png";
import issueTrackerGif from "/public/assets/IssueTrackerGif_20s.gif";
import littleLemonThumbnail from "/public/assets/little_lemon_thumbnail.png";
import littleLemonGif from "/public/assets/LittleLemonDemoGif.gif";
import "./ProjectsSection.css";

interface Props {
  name: string;
  repoLink: string;
  liveLink?: string;
  description: string;
  skills: string[];
}

const imagesMap = [
  {
    name: "Issue Tracker",
    static: issueTrackerThumbnail,
    gif: issueTrackerGif,
  },
  { name: "Game Hub", static: gameHubThumbnail, gif: gameHubGif },
  {
    name: "Little Lemon Restaurant",
    static: littleLemonThumbnail,
    gif: littleLemonGif,
  },
];

const getImageByName = (name: string) => {
  const imgMap = imagesMap.find((item) => item.name === name);
  const defaultMap = {
    name: "No Project",
    static: gameHubThumbnail,
    gif: gameHubGif,
  };

  return imgMap || defaultMap;
};

const ProjectCard = forwardRef<HTMLDivElement, Props>(
  ({ name, repoLink, liveLink, description, skills }) => {
    const leftContainerRef = useRef<HTMLDivElement | null>(null);
    const imageWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (leftContainerRef.current) {
        observer.observe(leftContainerRef.current);
      }

      if (imageWrapperRef.current) {
        observer.observe(imageWrapperRef.current);
      }

      return () => {
        if (leftContainerRef.current) {
          observer.unobserve(leftContainerRef.current);
        }

        if (imageWrapperRef.current) {
          observer.unobserve(imageWrapperRef.current);
        }
      };
    }, []);

    const projectImages = getImageByName(name);

    return (
      <div className="project-card">
        <div ref={leftContainerRef} className="left-container">
          <div className="flex flex-row w-full items-center justify-between">
            <h3 className="project-title">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </h3>
            <div className="icons">
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <IconGitHub />
              </a>
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                >
                  <IconExternal />
                </a>
              )}
            </div>
          </div>
          <p className="project-desc">{description}</p>
          <ul className="tech-stack">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div ref={imageWrapperRef} className="image-wrapper-container">
          <div className="image-wrapper">
            <img
              src={projectImages.static}
              alt={`${name} Static Image`}
              className="static-image"
            />
            <img
              src={projectImages.gif}
              alt={`${name} Animated Image`}
              className="animated-image"
            />
            <div className="hover-bg"></div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectCard;

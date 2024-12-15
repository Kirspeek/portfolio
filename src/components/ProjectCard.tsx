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

const ProjectCard = ({
  name,
  repoLink,
  liveLink,
  description,
  skills,
}: Props) => {
  const projectImages = getImageByName(name);

  return (
    <div className="project-card flex lg:flex-row">
      <div className="left-container">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="project-title">
            <a href={liveLink} target="_blank">
              {name}
            </a>
          </div>
          <div>
            <a href={repoLink} target="_blank" className="icon-link">
              <IconGitHub />
            </a>
            <a href={liveLink} target="_blank" className="icon-link">
              <IconExternal />
            </a>
          </div>
        </div>
        <div className="project-desc">{description}</div>
        <ul className="tech-stack">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className=" image-wraper-container hidden xl:flex flex-1 px-8 items-center relative">
        <div className="image-wrapper">
          <img
            src={projectImages.static}
            alt="Project Static Image"
            className="static-image xl:max-w-sm"
          />
          <img
            src={projectImages.gif}
            alt="Project Animated Image"
            className="animated-image xl:max-w-sm"
          />
          <div className="hover-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

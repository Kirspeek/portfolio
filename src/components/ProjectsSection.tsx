import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import SectionTitle from "./SectionTitle";

function ProjectsSection() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target); // Unobserve after making visible
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% is visible
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="projects" className="min-h-screen w-full flex items-center">
      <div className="projects-section flex flex-col justify-center w-full">
        <SectionTitle sectionNumber="02" name="Things I've Built" />

        <div className="flex flex-col gap-4">
          <ProjectCard
            ref={(el) => (projectRefs.current[0] = el)}
            name="Issue Tracker"
            repoLink="https://github.com/Kirspeek/issue-tracker"
            description="Issue Tracker is a web application designed to help teams manage and track issues efficiently..."
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "HTML",
              "Tailwind CSS",
              "Radix UI",
              "MySQL",
              "Prisma",
              "NextAuth.js",
            ]}
          />
          <ProjectCard
            ref={(el) => (projectRefs.current[1] = el)}
            name="Game Hub"
            repoLink="https://github.com/Kirspeek/Game_App"
            liveLink="https://game-app-green.vercel.app/"
            description="Worked with the RAWG.io API to develop a web app displaying a comprehensive list of video games..."
            skills={["React", "TypeScript", "HTML", "CSS", "Chakra UI"]}
          />
          <ProjectCard
            ref={(el) => (projectRefs.current[2] = el)}
            name="Little Lemon Restaurant"
            repoLink="https://github.com/Kirspeek/little-lemon-restaurant"
            description="This project was built as the final project for Meta's Frontend Engineer certificate..."
            skills={["React", "JavaScript", "HTML", "CSS", "Firebase"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;

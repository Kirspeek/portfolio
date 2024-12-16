import { useEffect, useRef } from "react";
import "./Home.css";
import Lego from "./Lego";

function Home() {
  const homeRefs = useRef<(HTMLDivElement | HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target); // Unobserve after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all non-null elements
    homeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup observer
      homeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="home" className="home-container w-full flex">
      {/* Left Section */}
      <div className="home-left">
        <p className="intro-text">Hi there! My name is</p>
        <h1 className="name-text">
          Iryna <br /> Cherepenko
        </h1>
        <h2 className="faded-text catchy-phrase max-w-full lg:max-w-xl">
          I craft seamless user experiences
        </h2>
        <p className="max-w-full lg:max-w-xl faded-text d-parag">
          I’m a{" "}
          <a className="one" href="https://github.com/Kirspeek" target="blank">
            frontend engineer
          </a>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on upskilling my skills in{" "}
          <a className="two" href="https://github.com/Kirspeek" target="blank">
            React
          </a>{" "}
          through {""}
          <a
            className="three"
            href="https://github.com/Kirspeek"
            target="blank"
          >
            challenging projects
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="home-right">
        <Lego />
      </div>
    </div>
  );
}

export default Home;

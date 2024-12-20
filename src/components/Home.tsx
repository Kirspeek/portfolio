import { useEffect, useRef } from "react";
import "./Home.css";
import Lego from "./Lego";

function Home() {
  const homeLeftRef = useRef<HTMLDivElement | null>(null);
  const homeRightRef = useRef<HTMLDivElement | null>(null);

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

    if (homeLeftRef.current) {
      observer.observe(homeLeftRef.current);
    }

    if (homeRightRef.current) {
      observer.observe(homeRightRef.current);
    }

    return () => {
      if (homeLeftRef.current) {
        observer.unobserve(homeLeftRef.current);
      }

      if (homeRightRef.current) {
        observer.unobserve(homeRightRef.current);
      }
    };
  }, []);

  return (
    <div id="home" className="home-container w-full flex">
      <div ref={homeLeftRef} className="home-left">
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
            software engineer
          </a>{" "}
          specializing in building exceptional digital platforms. Currently, I’m
          focused on enhancing my skills in{" "}
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
      <div ref={homeRightRef} className="home-right">
        <Lego />
      </div>
    </div>
  );
}

export default Home;

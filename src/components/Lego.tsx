import React from "react";
import { useEffect, useRef } from "react";
import "./Lego.css";

const Lego: React.FC = () => {
  const aboutIntroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is intersecting:", entry.target);
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutIntroRef.current) {
      console.log("Observer is observing:", aboutIntroRef.current);
      observer.observe(aboutIntroRef.current);
    }
    return () => {
      if (aboutIntroRef.current) {
        console.log("Cleaning up observer for:", aboutIntroRef.current);
        observer.unobserve(aboutIntroRef.current);
      }
    };
  }, []);
  return (
    <main>
      <div ref={aboutIntroRef} className="tower">
        <div className="tower__group">
          <div className="tower__brick-layer tower__brick-layer--4">
            <div className="tower__brick tower__brick--0">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--orange">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--3">
            <div className="tower__brick tower__brick--45 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--orange">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--2">
            <div className="tower__brick tower__brick--0 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer--1">
            <div className="tower__brick tower__brick--45 tower__brick--purple">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--red">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--green">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer">
            <div className="tower__brick tower__brick--0 tower__brick--move14">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--red tower__brick--move13">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--orange tower__brick--move16">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--purple tower__brick--move15">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---1">
            <div className="tower__brick tower__brick--45 tower__brick--move10 tower__brick--magenta">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--move9">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--green tower__brick--move12">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--orange tower__brick--move11">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---2">
            <div className="tower__brick tower__brick--0 tower__brick--red tower__brick--move6">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--90 tower__brick--green tower__brick--move5">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--180 tower__brick--purple tower__brick--move8">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--270 tower__brick--move7">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
          <div className="tower__brick-layer tower__brick-layer---3">
            <div className="tower__brick tower__brick--45 tower__brick--purple tower__brick--move2">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--135 tower__brick--magenta tower__brick--move1">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--225 tower__brick--red tower__brick--move4">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
            <div className="tower__brick tower__brick--315 tower__brick--green tower__brick--move3">
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-side"></div>
              <div className="tower__brick-stud"></div>
              <div className="tower__brick-stud"></div>
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:cherepenko.iryna@gmail.com" className="lego-button">
        CONTACT ME
      </a>
      <p className="text-lego">TO BUILD TOGETHER</p>
    </main>
  );
};

export default Lego;

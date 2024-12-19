import { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div ref={footerRef} className="footer">
      <div>
        Made with ♡ by @Kirspeek using React, TypeScript, Tailwind CSS, and
        Radix UI.
        <br />
        &copy; 2024 | Wish everyone a fantastic day!
      </div>
    </div>
  );
};

export default Footer;

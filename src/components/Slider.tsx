import React, { useEffect, useRef } from "react";

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Element observed: ${entry.target}`); // Debug
            entry.target.classList.remove("hidden"); // Remove the 'hidden' class
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe each element
    elementRefs.current.forEach((el) => {
      if (el) {
        console.log(`Observing: ${el}`); // Debug
        observer.observe(el);
      }
    });

    return () => {
      // Cleanup observer
      elementRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<any>, // Type assertion for React elements
            {
              ref: (el: HTMLElement | null) =>
                (elementRefs.current[index] = el),
              className: `${child.props.className || ""} hidden`,
            }
          );
        }
        return child;
      })}
    </div>
  );
};

export default Slider;

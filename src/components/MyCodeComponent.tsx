import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import "./MyCodeComponent.css";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `
const developer = {
  fullName: "Iryna Cherepenko",
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "HTML & CSS",
    "Nest.js",
    "Node",
    "MongoDB",
    "SQL",
    "Git",
    "..."
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  },
};
`;

const MyCodeComponent: React.FC = () => {
  const [typedCode, setTypedCode] = useState<string>("");

  useEffect(() => {
    let cursorPosition = 0;
    const typeSpeed = 100;

    const type = () => {
      if (cursorPosition < codeString.length) {
        setTypedCode(codeString.substring(0, cursorPosition + 1));
        cursorPosition += 1;
        setTimeout(type, typeSpeed);
      }
    };

    type();

    return () => {
      setTypedCode("");
    };
  }, []);

  return (
    <div className="code-tab">
      <div className="tab-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="code-container">
        <SyntaxHighlighter
          language="typescript"
          style={{
            ...dracula,
            'pre[class*="language-"]': {
              ...dracula['pre[class*="language-"]'],
              background: "rgba(0, 0, 0, 0.9)",
            },
          }}
        >
          {typedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MyCodeComponent;

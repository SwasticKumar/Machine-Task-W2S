import React from "react";
import Typewriter from "typewriter-effect";

const TypingHeader = () => {
  return (
    <>
      <h1 className="fw-bold text-dark typing-font">
        Cursus Integer Consequat{" "}
        <span className="typing-effect">
          <Typewriter
            options={{
              strings: ["Tristique."],
              autoStart: true,
              loop: true,
              delay: 100, // Typing speed
              deleteSpeed: 50, // Deleting speed
              cursor: "|",
              pauseFor: 1000, // Wait 2 seconds after typing
            }}
          />
        </span>{" "}
      </h1>
    </>
  );
};

export default TypingHeader;

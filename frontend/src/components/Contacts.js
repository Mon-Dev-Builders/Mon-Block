"use client";

import { useState } from "react";
import { Container } from "./assets";

const logos = [
  { image: "Youtube.png" },
  { image: "Facebook.png" },
  { image: "Linkedin.png" },
  { image: "Twitter.png" },
  { image: "Youtube.png" },
  { image: "Facebook.png" },
  { image: "Linkedin.png" },
  { image: "Twitter.png" },
  { image: "Youtube.png" },
  { image: "Facebook.png" },
  { image: "Linkedin.png" },
  { image: "Twitter.png" },
  { image: "Youtube.png" },
  { image: "Facebook.png" },
  { image: "Linkedin.png" },
  { image: "Twitter.png" },
];

export const Contacts = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      {/* <div className="w-full h-fit flex flex-col items-center 2xl:gap-12 gap-8 py-32">
        <h3 className="text-4xl 2xl:text-5xl font-medium text-[#000000]">
          Харилцагчид
        </h3>
        <div
          className="w-full h-24 overflow-hidden flex bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`slide-animation ${isPaused ? "paused" : ""}`}>
            {logos.map((card, index) => (
              <img
                key={index}
                src={`./${card.image}`}
                className="h-24 mx-10 opacity-50 hover:opacity-100 transition-opacity duration-30"
                alt="Logo"
              />
            ))}
          </div>
          <div className={`slide-animation ${isPaused ? "paused" : ""}`}>
            {logos.map((card, index) => (
              <img
                key={index + logos.length}
                src={`./${card.image}`}
                style={{ color: "red" }}
                className="h-24 mx-10 opacity-50 hover:opacity-100 transition-opacity duration-30"
                alt="Logo"
              />
            ))}
          </div>
        </div>
      </div> */}
    </Container>
  );
};

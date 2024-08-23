"use client";

import { useState } from "react";
import { Container } from "./assets";

const imageSources = [
  "./Youtube.png",
  "./Facebook.png",
  "./Linkedin.png",
  "./Twitter.png",
  "./Youtube.png",
  "./Facebook.png",
  "./Linkedin.png",
  "./Twitter.png",
  "./Youtube.png",
  "./Facebook.png",
  "./Linkedin.png",
  "./Twitter.png",
  "./Youtube.png",
  "./Facebook.png",
  "./Linkedin.png",
  "./Twitter.png",
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
      <div className="w-full h-fit flex flex-col items-center 2xl:gap-12 gap-8 py-32 ">
        <h3 className="text-4xl 2xl:text-5xl font-medium text-[#000000]">
          Харилцагчид
        </h3>
        <div
          className={`slider ${isPaused ? "paused" : ""} `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full overflow-hidden">
            <div className="flex w-[200%] slide-track">
              {imageSources.map((src, index) => (
                <div className="flex-1 h-10">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-30 w-full"
                  />
                </div>
              ))}

              {imageSources.map((src, index) => (
                <div className="flex-1 ">
                  <img
                    src={src}
                    alt={`Logo ${index + 1}`}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-30 w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

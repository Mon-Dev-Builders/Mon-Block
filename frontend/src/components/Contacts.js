"use client";

import { useState } from "react";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Contacts = () => {
  const { logosUrl } = useData();
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      <div className="w-full h-fit flex flex-col items-center gap-4 sm:gap-6 2xl:gap-12 md:gap-8 py-8 sm:py-12">
        <h3 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-[#000000]">
          Харилцагчид
        </h3>
        <div
          className={`slider ${isPaused ? "paused" : ""} `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full overflow-hidden">
            <div className="flex w-[200%] slide-track">
              {logosUrl.map((src, index) => (
                <div
                  key={index}
                  className="flex-1 p-1 sm:p-2 md:p-4 justify-center items-center"
                >
                  <div
                    className="w-16 h-16 sm:w-24 sm:h-24 bg-contain bg-center opacity-40 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      minWidth: "64px",
                      minHeight: "64px",
                      maxWidth: "120px",
                      maxHeight: "120px",
                    }}
                  ></div>
                </div>
              ))}

              {logosUrl.map((src, index) => (
                <div
                  key={index}
                  className="flex-1 p-1 sm:p-2 md:p-4 justify-center items-center"
                >
                  <div
                    className="w-16 h-16 sm:w-24 sm:h-24 bg-contain bg-center opacity-40 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "contain", // Ensures the logo fits within the container
                      backgroundRepeat: "no-repeat", // Prevents tiling
                      backgroundPosition: "center", // Centers the logo within the container
                      minWidth: "100px", // Ensures the container is not too small
                      minHeight: "100px", // Ensures the container is not too small
                      maxWidth: "150px", // Limits the maximum width for larger logos
                      maxHeight: "150px", // Limits the maximum height for larger logos
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

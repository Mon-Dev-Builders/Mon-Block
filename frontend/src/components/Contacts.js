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
      <div className="w-full h-fit flex flex-col items-center gap-6 2xl:gap-12 md:gap-8 md:py-32 py-12">
        <h3 className="xl:text-4xl 2xl:text-5xl lg:text-3xl sm:text-2xl text-xs font-medium text-[#000000]">
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
                <div key={index} className="flex-1 p-2 md:p-4">
                  <div
                    className="w-24 h-24 bg-contain bg-center opacity-40 hover:opacity-100 transition-opacity duration-300"
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

              {logosUrl.map((src, index) => (
                <div key={index} className="flex-1 p-2 md:p-4">
                  <div
                    className="w-24 h-24 bg-contain bg-center opacity-40 hover:opacity-100 transition-opacity duration-300"
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

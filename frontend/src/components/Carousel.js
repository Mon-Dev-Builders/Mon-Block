"use client";
import { useEffect, useState } from "react";
import { Container } from "./assets";

export const Carousel = () => {
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <Container>
      <div className="h-[36rem] bg-black relative overflow-hidden">
        <div
          className={`absolute z-20 bg-gradient-to-r ${
            percent === 0 || percent === 3 ? "from-[#DE2028]" : "from-[#002672]"
          }  to-transparent top-0 left-0 text-white px-24 py-28 w-full h-full`}
        >
          <p className="text-7xl leading-snug">ИЛҮҮ ХЯМД</p>
          <p className="text-7xl">ИЛҮҮ ЧАНАРТАЙГ</p>
          <p className="text-3xl leading-tight">ТАНД ХҮРГЭНЭ</p>
        </div>
        <div className="absolute bottom-0 mb-12 flex w-full gap-5 justify-center z-30">
          <div
            className={`w-4 h-4 border-2 rounded-full ${
              percent === 0 || percent === 3 ? "bg-white" : null
            }`}
          ></div>
          <div
            className={`w-4 h-4 border-2 rounded-full ${
              percent === 1 ? "bg-white" : null
            }`}
          ></div>
          <div
            className={`w-4 h-4 border-2 rounded-full ${
              percent === 2 ? "bg-white" : null
            }`}
          ></div>
        </div>
        <div
          style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
          className={`absolute bg-red-200 w-[400%] flex h-full ${
            isTransitioning ? "duration-1000" : null
          }`}
        >
          <div
            style={{ backgroundImage: `url("carousel3.png")` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url("carousel2.png")` }}
            className="w-1/4 bg-green-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url("carousel1.png")` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url("carousel3.png")` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
        </div>
      </div>
    </Container>
  );
};

"use client";
import { useEffect, useState } from "react";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Carousel = () => {
  const [percent, setPercent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { carousel } = useData()
  useEffect(() => {
    const interval = setInterval(() => {
      percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
      setPercent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  });
  const images = carousel.images
  return (
    <Container>
      <div className="h-96 xl:h-[447px] mx-4 xl:mx-0 rounded-2xl xl:rounded-none bg-white relative overflow-hidden">
        <div
          className={`absolute z-20 bg-gradient-to-r ${percent === 0 || percent === 3 ? "from-[#DE2028]" : "from-[#002672]"
            }  to-transparent top-0 left-0 text-white px-6 sm:px-12 xl:px-24 pt-24 sm:py-14 xl:py-28 w-full h-full`}
        >
          <p className="text-3xl sm:text-5xl font-bold xl:text-7xl">
            {carousel.title[0]}
          </p>
          <p className="text-3xl sm:text-5xl font-bold xl:text-7xl sm:mt-1 xl:mt-2">
            {carousel.title[1]}
          </p>
          <p className="text-xl sm:text-2xl  xl:text-3xl ">{carousel.description}</p>
        </div>
        <div className="absolute bottom-0 mb-4 sm:mb-12 flex w-full gap-3 sm:gap-5 justify-center z-30">
          <div
            className={`w-[10px] h-[10px] sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 border-2 rounded-full ${percent === 0 || percent === 3 ? "bg-[#FF0202]" : null
              }`}
          ></div>
          <div
            className={`2xl:w-5 w-[10px] h-[10px] sm:w-4 sm:h-4 2xl:h-5 border-2 rounded-full ${percent === 1 ? "bg-[#FF0202]" : null
              }`}
          ></div>
          <div
            className={`2xl:w-5 w-[10px] h-[10px] sm:w-4 sm:h-4 2xl:h-5 border-2 rounded-full ${percent === 2 ? "bg-[#FF0202]" : null
              }`}
          ></div>
        </div>
        <div
          style={{ transform: `translateX(-${(percent * 100) / 4}%)` }}
          className={`absolute bg-red-200 w-[400%] flex h-full ${isTransitioning ? "duration-1000" : null
            }`}
        >
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url(${images[1]})` }}
            className="w-1/4 bg-green-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url(${images[2]})` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className="w-1/4 bg-blue-200 h-full bg-cover bg-center relative"
          ></div>
        </div>
      </div>
    </Container>
  );
};

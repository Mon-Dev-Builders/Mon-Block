"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Features = () => {
  const { features } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center gap-6 sm:gap-12 mb-12 sm:mb-24 px-2 sm:px-4">
        <p className="text-base sm:text-xl xl:text-4xl">ОНЦЛОГ, ДАВУУ ТАЛ </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-16 sm:py-2 text-start sm:text-center w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col sm:items-center w-full sm:w-64 gap-2 sm:gap-4 lg:gap-6">
              <div
                className="bg-green-400 min-w-16 h-16 sm:min-w-24 sm:h-24 lg:min-w-40 lg:h-40 xl:min-w-52 xl:h-52 rounded-lg mx-auto"
              ></div>
              <div className="text-xs sm:text-base xl:text-lg">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[2px] sm:h-[3px] my-4 sm:my-0 xl:my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

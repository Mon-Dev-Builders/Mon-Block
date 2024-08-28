"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Features = () => {
  const { features } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center gap-12 mb-24 px-4">
        <p className="text-lg sm:xl xl:text-4xl">ОНЦЛОГ, ДАВУУ ТАЛ </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-16 sm:py-2 text-start sm:text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex sm:flex-col sm:items-center  w-full sm:w-64 gap-4 sm:space-y-4">
              <div
                className="bg-green-400 min-w-24 h-24 sm:min-w-40 sm:h-40
               xl:min-w-52 xl:h-52 rounded-lg"
              ></div>
              <div className="text-sm sm:text-base xl:text-lg">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Features = () => {
  const { features } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center gap-12 mb-24 px-4">
        <p className="text-lg xl:text-4xl">ОНЦЛОГ, ДАВУУ ТАЛ </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:py-2 sm:text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full sm:w-64 gap-4 sm:space-y-4">
              <div
                className="bg-green-400 w-24 h-24
               sm:h-52 rounded-lg"
              ></div>
              <div className="text-start">
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

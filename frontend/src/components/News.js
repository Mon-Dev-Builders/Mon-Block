"use client";

import { Container } from "./assets";
import { NewsCard } from "./newsCard";
import { useData } from "./utils/dataProvider";

export const News = () => {
  const { news } = useData();
  return (
    <Container>
      <div className="w-full h-[250px]  2xl:h-[810px]  lg:h-[620px] sm:h-[390px] flex flex-col items-center justify-between ">
        <h3 className="md:text-2xl sm:text-xl xl:text-4xl 2xl:text-5xl text-xs font-medium text-[#000000] ">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-full overflow-x-scroll">
          <div className="w-full h-full flex items-center 2xl:gap-12 gap-4 px-5">
            {news.map((card) => (
              <NewsCard
                key={card.id}
                newsDate={card.date}
                newsImage={card.image}
                newsTitle={card.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

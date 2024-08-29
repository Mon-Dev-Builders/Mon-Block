"use client";

import { Container, NewsCard } from "./assets";
import { useData } from "./utils/dataProvider";

export const GridNews = () => {
  const { news } = useData();
  return (
    <Container>
      <div className="w-full h-fit flex flex-col justify-center items-center 2xl:gap-12 gap-8 py-32 m-auto ">
        <h3 className="xl:text-4xl 2xl:text-5xl lg:text-3xl sm:text-2xl font-medium text-[#000000] ">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-fit flex justify-center items-center ">
          <div className="w-fit h-fit flex flex-wrap justify-center items-start 2xl:gap-12 gap-8 px-5">
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

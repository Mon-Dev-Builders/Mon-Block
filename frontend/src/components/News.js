"use client";

import { Container, NewsCard } from "./assets";
import { useData } from "./utils/dataProvider";

export const News = () => {
  const { news } = useData();
  return (
    <Container>
      <div className="w-full h-[200px] sm:h-[390px] lg:h-[620px] 2xl:h-[810px] flex flex-col items-center justify-between my-6 sm:my-10">
        <h3 className="text-base sm:text-xl md:text-2xl xl:text-4xl 2xl:text-5xl font-medium text-[#000000]">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-full overflow-x-auto">
          <div className="w-fit h-full flex items-center gap-2 sm:gap-4 2xl:gap-12 px-2 sm:px-5">
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

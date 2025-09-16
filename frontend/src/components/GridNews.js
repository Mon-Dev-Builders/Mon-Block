"use client";

import { Container, NewsCard } from "./assets";
import { useData } from "./utils/dataProvider";
import Link from "next/link";

export const GridNews = () => {
  const { news } = useData();
  return (
    <Container>
      <div className="md:w-[1160px] h-fit flex flex-col justify-center items-center 2xl:gap-12 gap-8 py-10 m-auto ">
        <h3 className="xl:text-4xl 2xl:text-5xl lg:text-3xl sm:text-2xl font-medium text-[#000000] ">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-fit flex justify-center items-center ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-5">
            {news.map((card) => (
              <Link key={card.id} href={`/news/${card.id}`} className="w-full">
                <NewsCard
                  newsDate={card.date}
                  newsImage={card.image}
                  newsTitle={card.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

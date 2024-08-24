import { Container } from "./assets";
import { NewsCard } from "./newsCard";

const cardNews = [
  {
    id: 1,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 2,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 3,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
  {
    id: 4,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 5,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 6,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
];

export const News = () => {
  return (
    <Container>
      <div className="w-full h-[250px]  2xl:h-[810px]  lg:h-[620px] md:h-[390px] flex flex-col items-center justify-between ">
        <h3 className="md:text-4xl 2xl:text-5xl text-xs font-medium text-[#000000] ">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-full overflow-x-scroll">
          <div className="w-full h-full flex items-center 2xl:gap-12 gap-4 px-5">
            {cardNews.map((card) => (
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

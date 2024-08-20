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
  {
    id: 7,
    date: "2024-08-05",
    title: "блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
];

export const GridNews = () => {
  return (
    <Container>
      <div className="w-full h-fit flex flex-col justify-center items-center 2xl:gap-12 gap-8 py-32 m-auto ">
        <h3 className="text-4xl 2xl:text-5xl font-medium text-[#000000] ">
          Мэдээ, мэдээлэл
        </h3>
        <div className="w-full h-fit flex justify-center items-center ">
          <div className="w-fit h-fit flex flex-wrap justify-center items-start 2xl:gap-12 gap-8 px-5">
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

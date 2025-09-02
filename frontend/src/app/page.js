import { Carousel, Contacts, News, Products } from "@/components";

export default function Home() {
  return (
    <div className="w-full mx-auto h-full">
      <Carousel />
      <Products />
      <Contacts />
      <News />
    </div>
  );
}

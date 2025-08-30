import { Carousel, Contacts, News, Products } from "@/components";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Carousel />
      <Products />
      <Contacts />
      <News />
    </div>
  );
}

import { Carousel, Contacts, News, Products, Video } from "@/components";


export default function Home() {
  return (
    <div className="w-full mx-auto h-full">
      <Carousel />
      <Products />
      <Video />
      <Contacts />
      
    </div>
  );
}

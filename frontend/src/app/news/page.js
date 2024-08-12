import { Carousel, Contacts, Footer, Header, Video } from "@/components";

export default function NewsPage() {
  return (
    <>
      <div className="shadow-2xl w-fit m-auto">
        <Header />
        <Carousel />
        <Contacts />
        <Video />
        <Footer />
      </div>
    </>
  );
}

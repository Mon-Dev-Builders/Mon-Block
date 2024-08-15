import {
  Carousel,
  Contacts,
  Footer,
  Header,
  News,
  Products,
  Video,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="shadow-2xl w-fit m-auto">
        <Header />
        <Carousel />
        <Products />
        <Contacts />
        <News />
        <Video />
        <Footer />
      </div>
    </>
  );
}

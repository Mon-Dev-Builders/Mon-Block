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
      <Header />
      <Carousel />
      <Products />
      <Contacts />
      <News />
      <Video />
      <Footer />
    </>
  );
}

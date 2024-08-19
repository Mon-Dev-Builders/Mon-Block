import {
  Carousel,
  Contacts,
  Footer,
  Header,
  Video,
  GridNews,
} from "@/components";

export default function NewsPage() {
  return (
    <>
      <Header />
      <Carousel />
      <GridNews />
      <Contacts />
      <Video />
      <Footer />
    </>
  );
}

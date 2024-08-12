import { Footer, About, Header, Video, Contacts, Carousel } from "@/components";

export default function AboutPage() {
  return (
    <>
      <div className="shadow-2xl w-fit m-auto">
        <Header />
        <Carousel />
        <About />
        <Contacts />
        <Video />
        <Footer />
      </div>
    </>
  );
}

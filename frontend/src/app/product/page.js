import {
  Carousel,
  Contacts,
  Features,
  Footer,
  Header,
  ProductsDetail,
  Video,
} from "@/components";

export default function ProductPage() {
  return (
    <>
      <div className="shadow-2xl w-fit m-auto">
        <Header />
        <Carousel />
        <ProductsDetail />
        <Features />
        <Contacts />
        <Video />
        <Footer />
      </div>
    </>
  );
}

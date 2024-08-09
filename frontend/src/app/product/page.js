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
      <Header />
      <Carousel />
      <ProductsDetail />
      <Features />
      <Contacts />
      <Video />
      <Footer />
    </>
  );
}

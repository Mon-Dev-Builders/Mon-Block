import Link from "next/link";
import { Container } from "./assets";
const products = [
  {
    name: "lightBlock",
    title: "Хөнгөн блок",
    image: "hongonBlock.png",
  },
  {
    name: "plateBlock",
    title: "Хавтан блок",
    image: "havtanBlock.png",
  },
];
export const Products = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16">
        <p className="text-[50px]">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex gap-24">
          {products.map((product) => (
            <Link key={product.name} href={`/product#${product.name}`}>
              <div className="flex flex-col items-center">
                <div
                  className="w-[672px] h-[672px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <p className="text-[50px] mt-9">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[3px] my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

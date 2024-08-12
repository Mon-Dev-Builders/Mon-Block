import Link from "next/link";
import { Container } from "./assets";
const products = [
  {
    name: "lightBlock",
    title: "Хөнгөн блок",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290771/hongon.block_i1f41f.png",
  },
  {
    name: "plateBlock",
    title: "Хавтан блок",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
];
export const Products = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16">
        <p className="text-4xl 2xl:text-5xl">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex gap-24">
          {products.map((product) => (
            <Link key={product.name} href={`/product#${product.name}`}>
              <div className="flex flex-col items-center">
                <div
                  className="w-[532px] 2xl:w-[672px] h-[532px] 2xl:h-[672px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <p className="text-4xl 2xl:text-5xl mt-9">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[3px] my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

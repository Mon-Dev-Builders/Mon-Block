"use client";
import Link from "next/link";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const Products = () => {
  const { products } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 py-16">
        <p className="text-4xl">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex gap-24">
          {products.map((product) => (
            <Link key={product.name} href={`/product#${product.name}`}>
              <div className="flex flex-col items-center">
                <div
                  className="w-[532px] h-[532px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <p className="text-4xl mt-9">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[3px] my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

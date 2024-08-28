"use client";
import Link from "next/link";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const Products = () => {
  const { products } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 xl:gap-16 py-12 px-4 xl:py-16">
        <p className="text-lg sm:text-xl xl:text-4xl">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 sm:gap-12 xl:gap-24 w-full">
          {products.map((product) => (
            <Link key={product.name} href={`/product#${product.name}`}>
              <div className="flex flex-col items-center w-full overflow-hidden">
                <div
                  className="w-full h-44 sm:w-80 sm:h-80 xl:w-[532px] xl:h-[532px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <p className="text-base sm:text-lg xl:text-4xl mt-4 xl:mt-9">
                  {product.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[3px] my-0 xl:my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

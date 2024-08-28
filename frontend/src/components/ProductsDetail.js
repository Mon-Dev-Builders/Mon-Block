"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const ProductsDetail = () => {
  const { products } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center px-4 py-12">
        <p className="text-lg sm:text-xl xl:text-4xl">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex flex-col w-full my-6 sm:my-12 xl:my-24 items-center gap-4">
          {products.map((product, index) => (
            <div
              key={product.name}
              id={product.name}
              className="w-full flex flex-col items-center"
            >
              {index !== 0 ? (
                <div className="hidden sm:flex h-[3px] my-20 bg-red-500 w-full"></div>
              ) : null}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 xl:gap-16">
                <div
                  className="w-full flex h-44 sm:min-w-80 sm:h-80 xl:w-[532px] xl:h-[532px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="flex flex-col max-w-[684px] max-h-[532px] text-[30px] font-medium gap-4 sm:gap-6 xl:gap-10 ">
                  <p className="text-base font-bold sm:text-lg xl:text-3xl text-center sm:text-start">
                    {product.title}
                  </p>
                  <p className="text-sm sm:text-base xl:text-xl text-justify px-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

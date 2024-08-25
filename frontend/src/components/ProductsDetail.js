"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const ProductsDetail = () => {
  const { products } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center py-12">
        <p className="text-4xl">БҮТЭЭГДЭХҮҮН</p>
        <div className="flex flex-col w-full my-24 items-center">
          {products.map((product, index) => (
            <div
              key={product.name}
              id={product.name}
              className="w-full flex flex-col items-center"
            >
              {index !== 0 ? (
                <div className="h-[3px] my-20 bg-red-500 w-full"></div>
              ) : null}
              <div className="flex gap-16">
                <div
                  className="w-[532px] h-[532px] bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <div className="flex flex-col max-w-[684px] h-[532px] text-[30px] font-medium gap-10 ">
                  <p className="text-4xl">{product.title}</p>
                  <p className="text-xl text-justify">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

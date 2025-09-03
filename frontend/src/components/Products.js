"use client";
import Link from "next/link";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Products = () => {
  const { products } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center py-12 px-4 xl:py-16">
        <p className="text-lg font-bold sm:text-xl xl:text-4xl">БҮТЭЭГДЭХҮҮН</p>

        {/* GRID: зөвхөн энд gap тавина */}
        <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-2 gap-x-[69px] gap-y-[102px] w-[1007px]">
          {products.map((product) => (
            <Link key={product.name} href={`/product#${product.name}`} className="block">
              <div className="flex flex-col items-center w-full overflow-hidden rounded-xl shadow">
                {/* Зураг */}
                <div className="w-full h-44 sm:h-80 xl:h-[231px] rounded-t-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Бичвэр */}
                <div className="w-full h-[49px] bg-[#FF0000] flex items-center justify-center text-base text-white sm:text-lg xl:text-4xl rounded-b-xl">
                  {product.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-[3px] my-0 xl:my-20 bg-red-500 w-full"></div>
    </Container>
  );
};

// updatetest

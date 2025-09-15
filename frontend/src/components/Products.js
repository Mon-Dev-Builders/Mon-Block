"use client";
import Link from "next/link";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Products = () => {
  const { products, OtherProducts, features } = useData();
  return (
    <Container>
      <div className="flex flex-col items-center py-12 px-2 sm:px-4 xl:py-16">
        <p className="text-lg font-bold sm:text-xl xl:text-4xl xl:py-16">
          Бүтээгдэхүүн
        </p>
        {/* GRID: зөвхөн энд gap тавина */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-[40px] sm:gap-y-[60px] xl:grid-cols-2 xl:gap-x-[69px] xl:gap-y-[102px] w-full max-w-[1007px]">
          {products.map((product) => (
            <Link
              key={product.name}
              href={`/product#${product.name}`}
              className="block"
            >
              <div className="flex flex-col items-center w-full overflow-hidden rounded-xl shadow">
                {/* Зураг */}
                <div className="w-full h-44 sm:h-80 xl:h-[231px] rounded-t-xl overflow-hidden bg-[radial-gradient(circle_at_center,_#f9f9f9,_#e5e5e5)]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-scale-down"
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
      <div className="flex flex-col items-center py-12 px-2 sm:px-4 xl:py-16">
        <p className="text-lg font-bold sm:text-xl xl:text-4xl xl:py-16">
          Бусад бүтээгдэхүүн
        </p>
        {/* GRID: зөвхөн энд gap тавина */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-[40px] sm:gap-y-[60px] xl:grid-cols-2 xl:gap-x-[69px] xl:gap-y-[102px] w-full max-w-[1007px]">
          {OtherProducts.map((Otherproduct) => (
            <Link
              key={Otherproduct.name}
              href={`/product#${Otherproduct.name}`}
              className="block"
            >
              <div className="flex flex-col items-center w-full overflow-hidden rounded-xl shadow">
                {/* Зураг */}
                <div className="w-full h-44 sm:h-80 xl:h-[231px] rounded-t-xl overflow-hidden bg-[radial-gradient(circle_at_center,_#f9f9f9,_#e5e5e5)]">
                  <img
                    src={Otherproduct.image}
                    alt={Otherproduct.title}
                    className="w-full h-full object-scale-down"
                  />
                </div>
                {/* Бичвэр */}
                <div className="w-full h-[49px] bg-[#002672] flex items-center justify-center text-base text-white sm:text-lg xl:text-4xl rounded-b-xl">
                  {Otherproduct.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 mb-24 px-2 sm:px-4 xl:py-16 ">
        <p className="text-lg font-bold sm:text-xl xl:text-4xl">
          Автоклавын хийт бетон{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-16 sm:py-2 text-start sm:text-center w-full xl:w-[965px] ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:items-center h-[250px] xl:w-[233px] gap-4 sm:gap-[35px] sm:space-y-4"
            >
              <div className="min-w-24 h-full sm:min-w-40 sm:h-40 xl:min-w-[136px] xl:h-[136px] rounded-lg flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[100px] h-[100px] sm:w-[136px] sm:h-[136px] object-scale-down"
                />
              </div>
              <div className="text-lg font-bold sm:text-md text-center xl:text-lg w-full sm:w-auto h-[79px]">
                <h4>{feature.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[3px] my-0 xl:my-20 bg-red-500 w-[1152px] mx-auto"></div>
      <div className="text-[13px] font-bold sm:text-md xl:text-[22px] xl:w-[1007px] sm:w-auto h-[94px] mx-auto text-center">
        <p>
          Хэрэв та AAC блокыг орон сууц, үйлдвэрийн барилга, оффисын барилга
          зэрэгт ашиглахаар төлөвлөж байгаа бол эдгээр давуу тал нь төслийн
          зардал, хугацаа, чанарт маш эерэг нөлөө үзүүлдэг.
        </p>
      </div>
    </Container>
  );
};

// updatetest

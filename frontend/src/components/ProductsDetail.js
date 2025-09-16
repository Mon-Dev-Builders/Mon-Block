"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const ProductsDetail = () => {
  // Cloudinary optimization helper for crisp images (1x/2x DPR)
  const optimizeCld = (url, { dpr2 = false } = {}) => {
    if (!url || typeof url !== "string") return url;
    try {
      if (
        url.includes("res.cloudinary.com") &&
        url.includes("/image/upload/")
      ) {
        const insert = `f_auto,q_auto:good${dpr2 ? ",dpr_2.0" : ""}`;
        return url.replace("/image/upload/", `/image/upload/${insert}/`);
      }
      return url;
    } catch {
      return url;
    }
  };
  const buildSrcSet = (url) => {
    const one = optimizeCld(url, { dpr2: false });
    const two = optimizeCld(url, { dpr2: true });
    return `${one} 1x, ${two} 2x`;
  };
  const { products, productTable, OtherProducts } = useData();
  return (
    <Container>
      <div className="flex flex-col gap-8 md:gap-0 w-full md:w-[1160px] py-8 md:py-16 px-4 md:px-0 items-start justify-center mx-auto">
        {/* Зураг + Текст */}
        {(Array.isArray(products) ? products : []).map((product, idx) => (
          <div
            key={product?.id ?? product?.title ?? idx}
            className="w-full mt-10 md:mt-20"
          >
            {/* Mobile: Image left, Title & Subtitle right; Description below */}
            <div className="md:hidden w-full">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-[140px]">
                  <img
                    src={product?.image || "/whiteLogo.png"}
                    alt={product?.title || "No image"}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h2 className="text-2xl font-bold text-[#002672] text-left">
                    {product?.title || "Гарчиг байхгүй"}
                  </h2>
                  <h3 className="text-base text-[#002672] font-normal text-left">
                    {product?.subtitle || "/ Автоклавын хийт бетон /"}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-700 leading-relaxed text-left">
                {product?.description || "Тайлбар байхгүй"}
              </p>
            </div>

            {/* Desktop/Tablet: Original two-column layout */}
            <div className="hidden md:flex md:flex-row gap-6 md:gap-12 w-full items-center justify-center md:h-[463px]">
              {/* Зураг */}
              <div className="w-full h-full md:w-[463px] xl:w-[580px] flex-shrink-0 flex justify-center items-center mx-auto md:border-r md:border-[#E5E5E5] md:pr-8 ">
                <img
                  src={product?.image || "/whiteLogo.png"}
                  alt={product?.title || "No image"}
                  className="w-[500px] max-w-[400px] xl:max-w-[500px] h-auto object-contain mx-auto"
                />
              </div>
              {/* Текст */}
              <div className="flex flex-col gap-3 w-full md:w-auto items-start">
                <h2 className="text-3xl xl:text-4xl font-bold text-[#002672]">
                  {product?.title || "Гарчиг байхгүй"}
                </h2>
                <h3 className="text-lg xl:text-xl text-[#002672] font-normal">
                  {product?.subtitle || "/ Автоклавын хийт бетон /"}
                </h3>
                <p className="text-base xl:text-lg text-gray-700 leading-relaxed">
                  {product?.description || "Тайлбар байхгүй"}
                </p>
              </div>
            </div>
            {/* Хүснэгт (пер бүтээгдэхүүн, давталтаар) */}
            <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 w-full mt-4 md:mt-0">
              <div className="overflow-x-auto w-full mt-0">
                <table className="w-full md:min-w-[600px] table-fixed md:table-auto border-separate border-spacing-0 text-[10px] md:text-sm xl:text-base leading-tight">
                  <thead>
                    <tr>
                      <th className="bg-[#C81127] text-white font-bold py-1 px-1 md:py-2 md:px-2 text-center md:w-[290px] whitespace-normal break-words leading-tight">
                        Урт x Өргөн /мм/
                      </th>
                      <th className="bg-[#002672] text-white font-bold py-1 px-1 md:py-2 md:px-2 text-center md:w-[290px] whitespace-normal break-words leading-tight">
                        Өргөн /мм/
                      </th>
                      <th className="bg-[#F4F4F4] text-[#002672] font-bold py-1 px-1 md:py-2 md:px-2 text-center md:w-[290px] whitespace-normal break-words leading-tight">
                        1 подон дээрх блокны тоо ширхэг
                      </th>
                      <th className="bg-[#F4F4F4] text-[#002672] font-bold py-1 px-1 md:py-2 md:px-2 text-center md:w-[290px] whitespace-normal break-words leading-tight">
                        1 подон дээрх блокны эзэлхүүн /мкуб/
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Array.isArray(product?.table)
                      ? product.table
                      : Array.isArray(productTable)
                      ? productTable
                      : []
                    ).map((group) =>
                      (group?.rows || []).map((row, i) => (
                        <tr
                          key={`${group?.size ?? "size"}-${row.width}`}
                          className={i % 2 === 0 ? "bg-white" : "bg-[#F4F4F4]"}
                        >
                          {i === 0 ? (
                            <td
                              rowSpan={(group?.rows || []).length}
                              className="border-l border-[#E5E5E5] align-top font-semibold text-center text-[#222] px-1 md:px-2 pt-8"
                            >
                              {group?.size}
                            </td>
                          ) : null}
                          <td className="border-l border-[#E5E5E5] text-center font-semibold h-[44px] md:h-[60px] px-1 md:px-2">
                            {row.width}
                          </td>
                          <td className="border-l border-[#E5E5E5] text-center font-semibold h-[44px] md:h-[60px] px-1 md:px-2">
                            {row.qty}
                          </td>
                          <td className="border-l border-[#E5E5E5] text-center font-semibold h-[44px] md:h-[60px] px-1 md:px-2">
                            {row.vol}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Бусад бүтээгдэхүүн */}
      <div className="w-full md:w-[1160px] mx-auto px-4 md:px-0 mt-12 md:mt-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-8 md:mb-12">
          Бусад бүтээгдэхүүн
        </h2>
        <div className="flex flex-col gap-12 md:gap-16 ">
          {(Array.isArray(OtherProducts) ? OtherProducts : []).map((op, i) => (
            <div
              key={op?.name ?? i}
              className="grid grid-cols-2 md:grid-cols-[580px_1fr] items-start   gap-4 md:gap-10"
            >
              {/* Зураг */}
              <div className="w-full md:w-[579px] border-r border-[#E5E5E5] mx-auto justify-self-center ">
                <img
                  src={optimizeCld(op?.image || "/whiteLogo.png")}
                  srcSet={buildSrcSet(op?.image || "/whiteLogo.png")}
                  alt={op?.title || "other"}
                  loading="lazy"
                  className="w-[471px] h-auto mx-auto object-contain"
                />
              </div>
              {/* Хуваагч + Текст */}
              <div className="flex items-start gap-4 md:gap-10 w-full">
                <div className="flex flex-col gap-2 md:gap-3 justify-start items-start w-full  md:pl-10">
                  <h3 className="text-[#002672] text-2xl md:text-[52px] font-bold leading-tight">
                    {op?.title}
                  </h3>
                  <ul className="list-none space-y-1 md:space-y-2 mt-2 md:mt-6 text-[#0B0B0B]">
                    {(op?.items || []).map((it, ii) => (
                      <li key={ii} className="text-sm md:text-base">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

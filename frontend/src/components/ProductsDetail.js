"use client";
import { Container } from "./assets";
import { useData } from "./utils/dataProvider";
export const ProductsDetail = () => {
  const { products } = useData();
  // Example: use only the first product for this block detail
  const product = products[0];
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full py-8 md:py-16 px-2 md:px-8 items-start justify-center">
        {/* Зураг */}
        <div className="w-full md:w-[320px] xl:w-[400px] flex-shrink-0 flex items-start justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[320px] xl:max-w-[400px] h-auto object-contain"
          />
        </div>
        {/* Текст ба хүснэгт */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 xl:gap-8 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#002672]">
              Блок
            </h2>
            <h3 className="text-base md:text-lg xl:text-xl text-[#002672] font-normal">
              / Автоклавын хийт бетон /
            </h3>
            <p className="text-xs md:text-base xl:text-lg text-gray-700 leading-relaxed">
              Бүтээгдэхүүний уртын хэмжээ нь хэв хашмалын өндрийн хэмжэээс
              (600мм), бүтээгдэхүүний өндрийн хэмжээ (250мм) нь босоо зүсэлтийн
              хэмжээ (энэ нь MONBLOX блокийн хувьд тогтмол хэмжэээс) -ээр
              тодорхойлогдох бөгөөд бүтээгдэхүүний өргөний хэмжээ (75-500мм) нь
              массыг босоо зүсэлтийн хэмжэээсээр тодорхойлогдоно.
            </p>
          </div>
          {/* Хүснэгт */}
          <div className="overflow-x-auto w-full mt-4">
            <table className="min-w-[600px] w-full border-collapse text-xs md:text-sm xl:text-base">
              <thead>
                <tr>
                  <th className="bg-[#C81127] text-white font-bold py-2 px-2 text-left min-w-[120px]">
                    Урт x Өргөн /мм/
                  </th>
                  <th className="bg-[#002672] text-white font-bold py-2 px-2 text-center min-w-[80px]">
                    Өргөн /мм/
                  </th>
                  <th className="bg-[#F4F4F4] text-[#002672] font-bold py-2 px-2 text-center min-w-[120px]">
                    1 подон дээрх блокны тоо ширхэг
                  </th>
                  <th className="bg-[#F4F4F4] text-[#002672] font-bold py-2 px-2 text-center min-w-[120px]">
                    1 подон дээрх блокны эзэлхүүн /мкуб/
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 600x250мм row group */}
                {[
                  { width: 75, qty: 128, vol: 1.44 },
                  { width: 100, qty: 96, vol: 1.44 },
                  { width: 125, qty: 72, vol: 1.35 },
                  { width: 150, qty: 64, vol: 1.44 },
                  { width: 200, qty: 48, vol: 1.44 },
                  { width: 250, qty: 32, vol: 1.2 },
                  { width: 300, qty: 32, vol: 1.44 },
                  { width: 375, qty: 24, vol: 1.35 },
                  { width: 500, qty: 16, vol: 1.2 },
                ].map((row, i) => (
                  <tr
                    key={row.width}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#F4F4F4]"}
                  >
                    {i === 0 ? (
                      <td
                        rowSpan={9}
                        className="border border-[#E5E5E5] align-middle font-semibold text-center text-[#222]"
                      >
                        600x250 мм
                      </td>
                    ) : null}
                    <td className="border border-[#E5E5E5] text-center">
                      {row.width}
                    </td>
                    <td className="border border-[#E5E5E5] text-center">
                      {row.qty}
                    </td>
                    <td className="border border-[#E5E5E5] text-center">
                      {row.vol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

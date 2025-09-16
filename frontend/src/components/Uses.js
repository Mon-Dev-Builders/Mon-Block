"use client";

import { Container } from "./assets";
import { useData } from "./utils/dataProvider";

export const Uses = () => {
  const { uses: usesData = [] } = useData() || {};
  return (
    <Container>
      <div className="w-full md:w-[1160px] mx-auto px-4 md:px-0 py-10 md:py-16">
        <div className="flex flex-col gap-8 md:gap-12">
          {usesData.map((u, idx) => (
            <div key={u.title + idx} className="flex flex-col gap-3 md:gap-4">
              {/* Title on top */}
              <h3 className="text-lg md:w-[557px] md:text-5xl font-semibold text-[#0B0B0B]">
                {u.title}
              </h3>
              {/* Below: description and image on same row (two columns on md+) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                <div className="flex flex-col gap-3">
                  <p className="text-sm md:text-base text-[#494949] text-justify  whitespace-pre-line">
                    {u.description ||
                      (Array.isArray(u.items) ? u.items.join(", ") : "")}
                  </p>
                  {Array.isArray(u.commonUses) && u.commonUses.length > 0 && (
                    <div className="mt-1">
                      <p className="text-sm md:text-base font-medium text-[#0B0B0B]">
                        Хамгийн түгээмэл хэрэглээ:
                      </p>
                      <ul className="list-disc pl-5 md:pl-6 text-sm md:text-base text-[#494949] mt-1 space-y-1">
                        {u.commonUses.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-full md:justify-self-auto">
                  <img
                    src={u.image}
                    alt={u.title}
                    className="w-full h-[140px] md:h-[300px] object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

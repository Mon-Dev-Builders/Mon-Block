"use client";

import { notFound } from "next/navigation";
import { useMemo } from "react";
import { Carousel, Contacts, Video } from "@/components";
import { useData } from "@/components/utils/dataProvider";

export default function ClientNewsDetail({ id }) {
  const { news } = useData();
  const item = useMemo(
    () => news?.find((n) => String(n.id) === String(id)),
    [news, id]
  );

  if (!item) {
    notFound();
  }

  // If images are stored in /public, ensure absolute leading slash
  const imageSrc = item.image?.startsWith("/") ? item.image : `/${item.image}`;

  return (
    <div>
      <Carousel />
      <div className="w-full md:w-[1160px] mx-auto px-4 md:px-0 py-10 md:py-16">
        <article className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#0B0B0B]">
            {item.title}
          </h1>
          <p className="text-xs md:text-sm text-[#666]">{item.date}</p>
          <div className="w-full h-[200px] md:h-[420px] rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose max-w-none text-sm md:text-base text-[#333]">
            <p>{item.content}</p>
          </div>
        </article>
        <div className="mt-10"></div>
      </div>
      <Video />
      <Contacts />
    </div>
  );
}

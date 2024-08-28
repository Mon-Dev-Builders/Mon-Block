"use client";

import { api } from "@/lib/axios";
import { createContext, useContext, useState } from "react";


const DataContext = createContext();
const productsData = [
  {
    name: "lightBlock",
    title: "Хөнгөн блок",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290771/hongon.block_i1f41f.png",
  },
  {
    name: "plateBlock",
    title: "Хавтан блок",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
];
const featureData = [
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
  {
    title: "ДАВУУ ТАЛ",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1723290780/havtan.block_jc8atl.png",
  },
];
const carouselData = {
  title: ["ИЛҮҮ ХЯМД", "ИЛҮҮ ЧАНАРТАЙГ"],
  description: "ТАНД ХҮРГЭНЭ",
  images: [
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812125/carousel3_soiorf.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812144/carousel2_wprz02.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812150/carousel1_k6q85b.png",
  ]
}
const newsData = [];
export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [features, setFeatures] = useState(featureData);
  const [carousel, setCarousel] = useState(carouselData)
  const [news, setNews] = useState(newsData);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await api.get("/product");
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getProduct();
  // }, []);
  return (
    <DataContext.Provider value={{ products, news, features, carousel }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

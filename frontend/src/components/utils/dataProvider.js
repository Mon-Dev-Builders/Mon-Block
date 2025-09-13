"use client";

import { api } from "@/lib/axios";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();
const productsData = [
  {
    name: "Block",
    title: "Блок",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954147/standard-b_1_nndaso.png",
  },
  {
    name: "plateBlock",
    title: "Ханын хавтан",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954146/wall-panel-type_1_liwwcf.png",
  },
    {
    name: "plateBlock",
    title: "Хучилтын хавтан",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954146/Starken_Floor_Panel_1_p1slhu.png",
  },
    {
    name: "plateBlock",
    title: "Гулдмай",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954146/jumbo-block_1_tbb8v6.png",
  },
];

const OtherProductsData = [
  {
    name: "Zamaska",
    title: "Замаска",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954097/%D0%97%D0%B0%D0%BC%D0%B0%D1%81%D0%BA%D0%B0_1_ksrry3.png",
  },
  {
    name: "Tsavuu",
    title: "Цавуу",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954097/%D0%A6%D0%B0%D0%B2%D1%83%D1%83_1_fig2oj.png",
  },
];
const logos = [
  "https://tavanbogd.com/_next/image?url=https%3A%2F%2Fadmin-mn.tavanbogd.com%2Fuploads%2FUntitled_design_3_5849002744.png&w=3840&q=75",
  ,
  "https://www.ncd.mn/storage/settings/June2023/oupMehMyfY0GIHdCyKuX.png",
  ,
  "https://cdn.greensoft.mn/uploads/site/530/photos/block/h_20220722115531_b2f822be9b5ac4833c84b93934f95407.png",
  "https://www.asiancd.mn/assets/img/logo_new.png",
  "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/288547167_498099288780217_408522637966623959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gr_SKRj5EBYQ7kNvgH-DU79&_nc_ht=scontent.fuln2-2.fna&oh=00_AYBzKIY_d92oaqGhPOIw4iVy0JNcShbVJNMaeJSRnNsKEw&oe=66D45CF5",
  "https://img.barilga.mn/140x140,sc,swv5D0nbqsYc10h82j4Vx5pSBBEclPGS95tvqpssA0Qo/files/8a8519336f694e7184b006769174a656.png?d=0",
  "https://tavanbogd.com/_next/image?url=https%3A%2F%2Fadmin-mn.tavanbogd.com%2Fuploads%2FUntitled_design_3_5849002744.png&w=3840&q=75",
  ,
  "https://www.ncd.mn/storage/settings/June2023/oupMehMyfY0GIHdCyKuX.png",
  ,
  "https://cdn.greensoft.mn/uploads/site/530/photos/block/h_20220722115531_b2f822be9b5ac4833c84b93934f95407.png",
  "https://www.asiancd.mn/assets/img/logo_new.png",
  "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/288547167_498099288780217_408522637966623959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Gr_SKRj5EBYQ7kNvgH-DU79&_nc_ht=scontent.fuln2-2.fna&oh=00_AYBzKIY_d92oaqGhPOIw4iVy0JNcShbVJNMaeJSRnNsKEw&oe=66D45CF5",
];
const featureData = [
  {
    title: "Хөнгөн жинтэй",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/1_gcdhdx.png",
  },
  {
    title: "Дулаан тусгаарлалт сайнн",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/1_2_xuho2i.png",
  },
  {
    title: "Галд тэсвэртэй",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/1_3_xt5onp.png",
  },
  {
    title: "Дуу тусгаарлалт",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/2_1_prtzwg.png",
  },
  {
    title: "Нарийн хэмжээстэй",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/2_2_fjte8j.png",
  },
  {
    title: "Байгальд ээлтэй",
    description:
      "Хүний эрүүл мэнд болон байгаль орчинд ямар нэгэн хор нөлөөгүй",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756949791/2_3_npkjxb.png",
  },
];
const carouselData = {
  title: ["ИЛҮҮ ХЯМД", "ИЛҮҮ ЧАНАРТАЙГ"],
  description: "ТАНД ХҮРГЭНЭ",
  images: [
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812125/carousel3_soiorf.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812144/carousel2_wprz02.png",
    "https://res.cloudinary.com/dzm85pldh/image/upload/v1724812150/carousel1_k6q85b.png",
  ],
};
const newsData = [
  {
    id: 1,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 2,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 3,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
  {
    id: 4,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 5,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 6,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
];




export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [OtherProducts, setOtherProducts] = useState(OtherProductsData);
  const [features, setFeatures] = useState(featureData);
  const [carousel, setCarousel] = useState(carouselData);
  const [logosUrl, setLogosUrl] = useState(logos);
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
    <DataContext.Provider
      value={{ products, OtherProducts, news, features, carousel, logosUrl }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

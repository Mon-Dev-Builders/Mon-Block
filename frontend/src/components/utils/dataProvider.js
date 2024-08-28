"use client";

import { api } from "@/lib/axios";

const { createContext, useContext, useState, useEffect } = require("react");

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

const cardNews = [
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
  const [news, setNews] = useState(cardNews);
  const [logosUrl, setLogosUrl] = useState(logos);
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
    <DataContext.Provider value={{ products, news, logosUrl }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

"use client";

import { api } from "@/lib/axios";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();
const productsData = [
  {
    name: "Block",
    title: "Блок",
    subtitle: "Автоклавын хийт бетон",
    description: `Бүтээгдэхүүний уртын хэмжээ нь хэв хашмалын өндрийн хэмжээс (600mm), бүтээгдэхүүний өндрийн хэмжээ (250mm) нь босоо зүсэлтийн хэмжээ  (Энэ нь MONBLOX блокийн хувьд тогтмол хэмжээс) -гээр тодорхойлогдох бөгөөд Бүтээгдэхүүний өргөний хэмжээ (75-500mm) нь  массын босоо  зүсэлтийн хэмжээгээр тодорхойлогдоно.`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758010880/standard-b_1_pqmfzm.png",
    // Per-product table groups
    table: [
      {
        size: "600x250 мм",
        rows: [
          { width: 75, qty: 128, vol: 1.44 },
          { width: 100, qty: 96, vol: 1.44 },
          { width: 125, qty: 72, vol: 1.35 },
          { width: 150, qty: 64, vol: 1.44 },
          { width: 200, qty: 48, vol: 1.44 },
          { width: 250, qty: 32, vol: 1.2 },
          { width: 300, qty: 32, vol: 1.44 },
          { width: 375, qty: 24, vol: 1.35 },
          { width: 500, qty: 16, vol: 1.2 },
        ],
      },
    ],
  },
  {
    name: "plateBlock",
    title: "Ханын хавтан",
    subtitle: "Автоклавын хийт бетон",
    description: `MONBLOX хучилтын хавтан нь ханын хавтантай харьцуулахад өндөрийн хэмжээс нь зузаан хүчитгэлийн хувьд ханын хавтангаас их хэмжээтэй  хүчитгэл хэрэглэнэ.`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758010880/wall-panel-type_1_ggqzeb.png",
    table: [
      {
        size: "4000x600 мм",
        rows: [
          { width: 100, qty: 24, vol: 5.76 },
          { width: 125, qty: 18, vol: 5.4 },
          { width: 150, qty: 16, vol: 5.76 },
          { width: 200, qty: 18, vol: 5.76 },
        ],
      },
    ],
  },
  {
    name: "plateBlock",
    title: "Хучилтын хавтан",
    description: `MONBLOX хучилтын хавтан нь ханын хавтантай харьцуулахад өндөрийн хэмжээс нь зузаан хүчитгэлийн хувьд ханын хавтангаас их хэмжээтэй  хүчитгэл хэрэглэнэ.`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758010880/Starken_Floor_Panel_1_av6enp.png",
    table: [
      {
        size: "4000x600 мм",
        rows: [
          { width: 150, qty: 16, vol: 5.76 },
          { width: 200, qty: 12, vol: 5.76 },
          { width: 250, qty: 8, vol: 4.8 },
        ],
      },
    ],
  },
  {
    name: "plateBlock",
    title: "Гулдмай",
    description: `Гулдмай нь барилгын төрөл бүрийн өрөг, хана дүүргэлт, дотор ханын булан зэргийг  гаргахад тохиромжтой бөгөөд үндсэн блокийн хэмжээгээр гарч байгаа нь хоорондын зохицол сайн болох  боломжийг бүрдүүлнэ.`,
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1756954147/standard-b_1_nndaso.png",
    table: [
      {
        size: "1200x600 мм",
        rows: [
          { width: 100, qty: 20, vol: 1.44 },
          { width: 125, qty: 16, vol: 1.44 },
          { width: 200, qty: 10, vol: 1.44 },
          { width: 250, qty: 8, vol: 1.44 },
        ],
      },
    ],
  },
];

const OtherProductsData = [
  {
    name: "Zamaska",
    title: "Замаска",
    items: ["Гадна хар замаска", "Дотор хар замаска", "Цагаан замаска"],
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758006353/zamaskBig_jsdkse.png",
  },
  {
    name: "Tsavuu",
    title: "Цавуу",
    items: ["Гадна фассадны цавуу", "Блокны цавуу", "Плитаны цавуу"],
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758006352/tsawuuBig_zhbe6q.png",
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
// Uses page data
const usesData = [
  {
    title: "Барилга",
    description:
      "AAC блок нь хөнгөн, дулаан тусгаарлалт сайтай, галд тэсвэртэй барилгын материал бөгөөд орчин үеийн барилгын бүхий л салбарт өргөн хэрэглэгддэг.",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758014395/Rectangle_4285_pusz2j.png",
  },
  {
    title: "Худалдааны болон агуулахын барилга",
    description:
      "AAC блок нь худалдааны төв, дэлгүүр, агуулах зэрэг том оврын барилгын хананд төгс тохирно. Энэ нь хөнгөн жинтэй, бат бөх, галд тэсвэртэй, дулаан тусгаарлах өндөр үзүүлэлттэй учраас барилгын нийт өртгийг бууруулж, ашиглалтын зардлыг хэмнэдэг.",
    commonUses: [
      "Супермаркет, дэлгүүр, хүнсний захын хана",
      "Ложистик, түгээлтийн төвийн агуулахын хана",
      "Даацын бус дотор хана, хуваалт",
      "Дулаан тусгаарлалт шаардсан агуулах, сэрүүн өрөө",
    ],
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758014395/Rectangle_4286_icrggb.png",
  },
  {
    title: "Орон сууц",
    description:
      "AAC блок нь стандарт блоктой харьцуулахад илүү их ачааллыг тэсвэрлэж, өндөр дулаан тусгаарлалт, илүү сайн дуу чимээ тусгаарлагчаар хангадаг. Энэ нь мөн бат бөх, бат бөх чанарыг хадгалдаг бөгөөд энэ нь барилга байгууламж барих, түүний дараагийн ашиглалттай холбоотой зардлыг бууруулдаг. \n\nОлон давхар орон сууцны барилгад агааржуулсан бетоныг ашиглах нь хүрээний технологитой холбоотой хамгийн оновчтой шийдлүүдийн нэг бөгөөд түүний шинж чанар нь янз бүрийн шалгуураар ялгагдана. Энгийн байдал - нэмэлт хүчин чармайлтгүйгээр агаарын блокыг янз бүрийн хэрэгслээр боловсруулахад хялбар байдаг. Хөнгөн байдал - барилгын ажлын зардлыг бууруулж, логистикийг сайжруулдаг. Гал тэсвэрлэх чадвар - агаарын блок нь галд шууд өртөхөд 4 цагийн турш тэсвэрлэх чадвартай бөгөөд анхны бүтэцээ хадгалдаг. Эрчим хүчний хэмнэлт - өндөр эрчим хүчний хэмнэлттэй, 20 см зузаантай агаарын блок нь барилгын ашиглалтын зайг хэмнэхэд тусалдаг. \n\nЭнгийн байдал - нэмэлт хүчин чармайлтгүйгээр агаарын блокыг янз бүрийн хэрэгслээр боловсруулахад хялбар байдаг.Хөнгөн байдал - барилгын ажлын зардлыг бууруулж, логистикийг сайжруулдаг, Гал тэсвэрлэх чадвар - агаарын блок нь галд шууд өртөхөд 4 цагийн турш тэсвэрлэх чадвартай бөгөөд анхны бүтэцээ хадгалдаг. ",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758014395/Rectangle_4287_bqelm9.png",
  },
  {
    title: "Амины орон сууц",
    description:
      "Агаарын блок нь хувийн байшин барихад шаардагдах шалгуурыг бүрэн хангаж, гадна болон дотоод хана барих, мөн хуваалт барихад ашиглагддаг. \n\nYtong агаар блокоор барьсан байшингийн гол давуу талуудын нэг нь дулаан тусгаарлалт өндөртэй бөгөөд энэ нь нийтийн үйлчилгээний төлбөрийг 40% хүртэл бууруулах боломжийг олгодог. \n\nАгаарын блокийн шинж чанарууд нь өвлийн улиралд байшингийн дулааныг хадгалахад тусалдаг бөгөөд зуны улиралд байшин доторх сэрүүн байдлыг уртасгадаг. Барилгын блок үйлдвэрлэх өндөр технологийн процесс нь материалын бат бөх чанарыг ихээхэн нэмэгдүүлж, түүний бүх шинж чанарыг удаан хугацаанд хадгалдаг. \n\nблокийн том хэмжээ, хөнгөн жин нь барилгын ажлын цаг, хөдөлмөрийн зардлыг 2 дахин багасгахад тусалдаг.",
    image:
      "https://res.cloudinary.com/dzm85pldh/image/upload/v1758014395/Rectangle_4288_qg8swk.png",
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
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 2,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 3,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
  {
    id: 4,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-1.png",
  },
  {
    id: 5,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-2.png",
  },
  {
    id: 6,
    date: "2024-08-05",
    title: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    content: "Блок дулаан тусгаарлах чадвар бусад дүүргэлтийн материалаас илүү",
    image: "newsImage-3.png",
  },
];

// Products detail table data (grouped). This enables rendering the spec table via loops.
const productTableData = [
  {
    size: "600x250 мм",
    rows: [
      { width: 75, qty: 128, vol: 1.44 },
      { width: 100, qty: 96, vol: 1.44 },
      { width: 125, qty: 72, vol: 1.35 },
      { width: 150, qty: 64, vol: 1.44 },
      { width: 200, qty: 48, vol: 1.44 },
      { width: 250, qty: 32, vol: 1.2 },
      { width: 300, qty: 32, vol: 1.44 },
      { width: 375, qty: 24, vol: 1.35 },
      { width: 500, qty: 16, vol: 1.2 },
    ],
  },
];

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [OtherProducts, setOtherProducts] = useState(OtherProductsData);
  const [features, setFeatures] = useState(featureData);
  const [carousel, setCarousel] = useState(carouselData);
  const [logosUrl, setLogosUrl] = useState(logos);
  const [news, setNews] = useState(newsData);
  const [productTable, setProductTable] = useState(productTableData);
  const [uses, setUses] = useState(usesData);
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
      value={{
        products,
        OtherProducts,
        news,
        features,
        carousel,
        logosUrl,
        productTable,
        uses,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);

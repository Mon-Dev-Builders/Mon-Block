import { Container } from "./assets";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

export const Footer = () => {
  return (
    <Container>
      <div className="w-full h-[552px] flex">
        <div className="h-full w-1/3 bg-[#C81127]  pl-[162px] py-24 pr-5 ">
          <div className=" h-full w-full flex flex-col items-start justify-center gap-10 text-white ">
            <img src="./tsagaan logo 2.png" className="w-[350px] " />
            <h1 className="text-[45px] font-bold text-[#FFFFFF]">
              +976 9900 0000
            </h1>
            <div className="flex justify-start items-center gap-5 ">
              <img src="./Twitter.png" className="w-10 h-10" />
              <img src="./Facebook.png" className="w-10 h-10" />
              <img src="./Linkedin.png" className="w-10 h-10" />
              <img src="./Youtube.png" className="w-10 h-10" />
            </div>
            <p className="text-lg text-[#FFFFFF] font-normal">
              ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р хороо,
              Чингисийн өргөн чөлөө
            </p>
          </div>
        </div>
        <div className="h-full w-2/3  bg-[#002672]  px-[150px] py-[92px]">
          <div className=" h-full w-full flex flex-row items-start justify-center  text-white">
            <div className="w-1/2 h-full flex flex-col items-start gap-10">
              <h3 className="text-[32px] font-medium text-[#FFFFFF]">
                Борлуулалтын төв
              </h3>
              <div className="flex flex-col   items-start gap-8">
                <div className="flex flex-row justify-start items-center gap-3">
                  <FiPhone className="w-8 h-8" />
                  <h3 className="text-[24px] text-[#FFFFFF] font-light">
                    7000-7000; 9901-0000
                  </h3>
                </div>
                <div className="flex flex-row justify-start items-center gap-3">
                  <MdOutlineEmail className="w-8 h-8" />
                  <h3 className="text-[24px] text-[#FFFFFF] font-light">
                    aivuun@monblock.mn
                  </h3>
                </div>
                <div className="flex flex-row justify-start items-center gap-3">
                  <TbMapSearch className="w-8 h-8" />
                  <h3 className="text-[24px] text-[#FFFFFF] font-light">
                    байршил
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start gap-10">
              <h3 className="text-[32px] font-medium text-[#FFFFFF]">
                Тусламж
              </h3>
              <div className="flex flex-col   items-start gap-8">
                <div className="flex flex-row justify-start items-center gap-3">
                  <h3 className="text-[24px] text-[#FFFFFF] font-light">
                    Нээлттэй ажлын байр
                  </h3>
                </div>
                <div className="flex flex-row justify-start items-center gap-3">
                  <h3 className="text-[24px] text-[#FFFFFF] font-light">
                    Мэдээ, мэдээлэл
                  </h3>
                </div>
                <div className="flex flex-row justify-start items-center gap-3">
                  <h3 className="text-[32px] text-[#FFFFFF] font-light">
                    Хамтран ажиллах хүсэлт
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

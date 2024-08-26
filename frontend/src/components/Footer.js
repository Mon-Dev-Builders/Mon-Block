import Link from "next/link";
import { Container } from "./assets";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

import { TfiTwitterAlt } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <div className="w-full h-[600px] flex flex-col-reverse sm:h-[552px] sm:w-full  sm:flex sm:flex-row  ">
        {/* Left Section */}
        <div className="w-full h-[174px]  pt-10 px-14 pb-4    sm:w-1/3 sm:h-full  sm:px-6 sm:py-24  bg-[#C81127]">
          <div className="h-full w-full flex flex-col items-center  gap-10 text-white  sm:flex sm:flex-col  sm:justify-between ">
            <div className="flex  justify-center items-center sm:items-center sm:justify-center sm:h-fit ">
              {" "}
              <Link href="/">
                <div
                  className="w-64 h-14  2xl:w-[23rem] sm:w-50 2xl:h-full  sm:h-14 "
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dzm85pldh/image/upload/v1723290770/tsagaanLogo_ffhbhi.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div className="w-full h-full flex justify-center  items-center sm:gap-5 sm:flex sm:flex-col sm:justify-between sm:items-start">
              <h1 className="invisible text-xs md:text-3xl 2xl:text-4xl sm:visible font-bold text-[#FFFFFF] ">
                +976 9900 0000
              </h1>
              <div className="flex justify-center items-center gap-5">
                <TfiTwitterAlt className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaYoutube className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
              </div>
              <p className="invisible text-[8px] md:text-xl 2xl:text-2xl sm:visible  text-[#FFFFFF] font-normal">
                ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р хороо,
                Чингисийн өргөн чөлөө
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full  h-[426px]   py-4 px-14 md:w-2/3  bg-[#002672] md:h-full  md:px-[150px] md:pt-[92px] md:pb-40">
          <div className="w-full h-full flex  flex-col  justify-between  text-white">
            <div className="w-full   flex flex-col items-start gap-4 md:gap-20 md:items-start">
              <h3 className="text-lg  md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Борлуулалтын төв
              </h3>
              <div className="w-full h-full gap-3 flex flex-col  items-start pl-6 md:gap-10 md:pl-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <FiPhone className="w-4 h-4 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    7000-7000; 9901-0000
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <MdOutlineEmail className="w-4 h-4 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    aivuun@monblock.mn
                  </h3>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <TbMapSearch className="w-4 h-4 flex-shrink-0 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light max-w-full">
                    ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р
                    хороо, Чингисийн өргөн чөлөө
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 md:w-1/2  md:gap-20  md:mt-0 md:items-start">
              <h3 className="text-lg md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Тусламж
              </h3>
              <div className="w-full h-full flex flex-col gap-3 pl-6 items-start  md:pl-0">
                <h3 className="text-base md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Нээлттэй ажлын байр
                </h3>
                <h3 className="text-base md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Мэдээ, мэдээлэл
                </h3>
              </div>
              <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-medium">
                Хамтран ажиллах хүсэлт
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

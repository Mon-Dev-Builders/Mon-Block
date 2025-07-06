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
        <div className="w-full h-[174px]  pt-10 px-14 pb-4    sm:w-1/3 sm:h-full  sm:px-6 sm:py-20 xl:py-24 xl:pl-40  bg-[#C81127] lg:pb-32 ">
          <div className="flex flex-col items-center w-full h-full gap-10 text-white sm:flex sm:flex-col sm:justify-between ">
            <div className="flex items-center justify-center sm:items-center sm:justify-center sm:h-fit xl:justify-start xl:w-full">
              <Link href="/">
                <div
                  className="w-40 h-28  2xl:w-64 2xl:h-[188px] sm:w-48   sm:h-[140px] "
                  style={{
                    backgroundImage: `url("whiteLogo.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div className="flex items-center justify-center w-full h-full sm:gap-5 sm:flex sm:flex-col sm:justify-between sm:items-start ">
              <h1 className="invisible text-[0px] sm:text-3xl 2xl:text-4xl sm:visible font-bold text-[#FFFFFF] ">
                +976 9900 0000
              </h1>
              <div className="flex items-center justify-center w-full gap-5 sm:justify-start">
                <TfiTwitterAlt className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaFacebook className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaLinkedin className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaYoutube className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
              </div>
              <p className="invisible text-[0px] sm:text-xl 2xl:text-2xl sm:visible  text-[#FFFFFF] font-normal">
                ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р хороо,
                Чингисийн өргөн чөлөө
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full  h-[426px]   py-4 px-14 sm:w-2/3  bg-[#002672] sm:h-full sm:py-20   xl:px-[100px] xl:py-24">
          <div className="flex flex-col justify-between w-full h-full text-white sm:flex-row sm:gap-8">
            <div className="flex flex-col items-start w-full gap-4 sm:gap-10 sm:items-start xl:gap-12 sm:w-1/2">
              <h3 className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF] ">
                Борлуулалтын төв
              </h3>
              <div className="flex flex-col items-start w-full h-full gap-3 pl-6 sm:gap-4 sm:pl-0 xl:justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    7000-7000; 9901-0000
                  </h3>
                </div>
                <div className="flex items-center gap-2 xl:gap-3">
                  <MdOutlineEmail className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    aivuun@monblock.mn
                  </h3>
                </div>
                <div className="flex items-start gap-2 xl:gap-3">
                  <TbMapSearch className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light max-w-full">
                    ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р
                    хороо, Чингисийн өргөн чөлөө
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-4 sm:gap-10 sm:items-start sm:justify-start xl:gap-12 sm:w-1/2 md:mt-0 md:items-start xl:pl-10 xl:w-1/2">
              <h3 className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Тусламж
              </h3>
              <div className="items-start hidden w-full h-full gap-3 pl-6 sm:flex sm:flex-col sm:gap-10 sm:pl-0 xl:justify-between ">
                <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Нээлттэй ажлын байр
                </h3>
                <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Мэдээ, мэдээлэл
                </h3>
                <h3 className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#FFFFFF] font-medium ">
                  Хамтран ажиллах хүсэлт
                </h3>
              </div>
              <div className="flex flex-col items-start w-full gap-3 pl-6 xl:pl-0 sm:hidden">
                <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Нээлттэй ажлын байр
                </h3>
                <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Мэдээ, мэдээлэл
                </h3>
              </div>
              <h3 className="text-lg sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#FFFFFF] font-medium sm:hidden">
                Хамтран ажиллах хүсэлт
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

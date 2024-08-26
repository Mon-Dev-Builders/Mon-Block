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
      <div className="w-full h-[260px] flex flex-col-reverse md:h-[552px] md:w-full  md:flex md:flex-row  ">
        {/* Left Section */}
        <div className="w-full h-1/2  py-4 px-6    md:w-1/3 md:h-full  md:pl-[162px] md:py-20 bg-[#C81127]">
          <div className="h-full w-full flex   gap-10 text-white  md:flex md:flex-col  md:justify-between">
            <div className="w-full h-full flex justify-center items-center md:items-start md:justify-start md:h-fit">
              {" "}
              <Link href="/">
                <div
                  className="w-32 h-7  2xl:w-[23rem] md:w-64 2xl:h-20  md:h-14"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dzm85pldh/image/upload/v1723290770/tsagaanLogo_ffhbhi.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div className="w-full h-full flex flex-col justify-between items-start md:gap-5">
              <h1 className="text-xs md:text-3xl 2xl:text-4xl font-bold text-[#FFFFFF]">
                +976 9900 0000
              </h1>
              <div className="flex justify-start items-center gap-5">
                <TfiTwitterAlt className="w-3 h-3 md:w-9 md:h-9 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaFacebook className="w-3 h-3 md:w-9 md:h-9 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaLinkedin className="w-3 h-3 md:w-9 md:h-9 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
                <FaYoutube className="w-3 h-3 md:w-9 md:h-9 2xl:w-10 cursor-pointer 2xl:h-10 transform transition-transform duration-300 hover:scale-110" />
              </div>
              <p className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-normal">
                ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р хороо,
                Чингисийн өргөн чөлөө
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full  h-1/2   py-4 px-6  md:w-2/3  bg-[#002672] md:h-full  md:px-[150px] md:pt-[92px] md:pb-40">
          <div className="w-full h-full flex    text-white">
            <div className="w-1/2 h-full flex flex-col items-center gap-4 md:gap-20 md:items-start">
              <h3 className="text-xs  md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Борлуулалтын төв
              </h3>
              <div className="w-full h-full flex flex-col justify-between items-start pl-10 md:gap-10 md:pl-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <FiPhone className="w-3 h-3 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    7000-7000; 9901-0000
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <MdOutlineEmail className="w-3 h-3 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    aivuun@monblock.mn
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <TbMapSearch className="w-3 h-3 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    байршил
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 md:w-1/2  md:gap-20  md:mt-0 md:items-start">
              <h3 className="text-xs md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Тусламж
              </h3>
              <div className="w-full h-full flex flex-col justify-between items-start pl-8 md:pl-0">
                <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Нээлттэй ажлын байр
                </h3>
                <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Мэдээ, мэдээлэл
                </h3>
                <h3 className="text-[8px] md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Хамтран ажиллах хүсэлт
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

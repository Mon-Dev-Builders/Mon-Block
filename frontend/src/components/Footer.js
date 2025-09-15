import Link from "next/link";
import { Container } from "./assets";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <div className="w-full max-w-[1007px] mx-auto flex flex-col md:flex-row items-stretch justify-between bg-white py-8 px-2 md:px-0 gap-8 md:gap-0">
        {/* Зүүн address/social хэсэг */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 gap-4 order-last md:order-none">
          <div className="flex items-center gap-3 mb-2 md:mb-4">
            <Link href="/">
              <img
                src="/headLogo.png"
                alt="Logo"
                className="w-[240px] h-[50px] md:w-[346px] md:h-[72px] object-contain"
              />
            </Link>
          </div>
          <div className="bg-[#C81127] h-[258px] p-3 md:p-4 flex flex-col items-center pt-16 md:items-start w-full gap-3 md:gap-0">
            <p className="text-white text-lg md:text-lg leading-5 md:leading-8 text-center md:pt-4 md:text-left">
              Монгол улс, улаанбаатар 15160,
              <br />
              Сүхбаатар дүүрэг, 1-р хороо,
              <br />
              Г. Чагдаржавын гудамж, 32/2
              <br />
              СААВ плаза, 704 тоот
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-1">
              <FaFacebook className="w-10 h-10  text-white hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <FaYoutube className="w-10 h-10  text-white hover:scale-110 transition-transform duration-300 cursor-pointer" />{" "}
              <FaViber className="w-10 h-10  text-white hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <FaFacebookMessenger className="w-10 h-10  text-white hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Борлуулалтын төв */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 gap-8 md:gap-4 px-0 md:px-12 order-2 md:order-none mt-6 md:mt-0">
          <h3 className="text-base md:text-xl font-semibold text-black md:mb-12 text-center w-full">
            Борлуулалтын төв
          </h3>
          <div className="flex flex-col gap-8 w-full pl-8 items-start md:items-start text-center">
            <div className="flex items-center justify-center gap-4 md:gap-3">
              <FiPhone className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <span className="text-lg md:text-lg text-black">7600 7779</span>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-3">
              <MdOutlineEmail className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <span className="text-lg md:text-lg text-black">
                info@monblox.mn
              </span>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-3">
              <TbMapSearch className="w-5 h-5 md:w-6 md:h-6 text-black" />
              <span className="text-lg md:text-lg text-black">Байршил</span>
            </div>
          </div>
        </div>
        {/* Тусламж */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 gap-2 md:gap-4 px-0 md:px-0 order-3 md:order-none mt-6 md:mt-0">
          <h3 className="text-base md:text-xl font-semibold text-black md:mb-12">
            Тусламж
          </h3>
          <div className="flex flex-col gap-2 w-full pl-8 md:pl-0 items-start  md:items-start text-center">
            <span className="text-lg md:text-lg text-black">
              Нээлттэй ажлын байр
            </span>
            <span className="text-lg md:text-lg text-black">
              Хамтран ажиллах хүсэлт
            </span>
            <span className="text-lg md:text-lg font-semibold text-[#C81127]">
              Гэрээт борлуулагч болох
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

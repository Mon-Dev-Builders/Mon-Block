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
      <div className="w-full h-[358px] flex flex-col-reverse sm:h-[358px] sm:w-full  sm:flex sm:flex-row  ">
        {/* Left Section */}
        <div className="w-full h-[174px]  pt-10 px-14 pb-4    sm:w-1/3 sm:h-full  sm:px-6 sm:py-20 xl:py-0 xl:pl-40   lg:pb-32 ">
          <div className="flex flex-col gap-10 items-start w-full h-full text-white sm:flex sm:flex-col sm:justify-between ">
            {/* logo */}
            <div className="flex items-center justify-center sm:items-center sm:justify-center sm:h-fit xl:justify-start xl:w-full">
<Link href="/">
  <img
    src="/headLogo.png"
    alt="Logo"
    className="w-[346px] h-28 sm:w-[346px] sm:h-[72px] 2xl:w-[346px] 2xl:h-[72px] object-contain mx-auto"
  />
</Link>
            </div>
            {/* address and social media */}
            <div className="flex items-center justify-center w-full h-full sm:gap-0 sm:flex sm:flex-col sm:items-start bg-[#C81127]">

              <p className="invisible xl:pt-2 xl:pl-8 mx-auto  text-[18px] sm:text-[18px] 2xl:text-[18px] sm:visible  text-white font-normal">
                Монгол улс, улаанбаатар 15160, Сүхбаатар дүүрэг, 1-р хороо, Г. Чагдаржавын гудамж, 32/2 СААВ плаза, 704 тоот
              </p>
              <div className="flex items-center justify-center w-full gap-2 sm:justify-start xl:pl-8">
                <TfiTwitterAlt className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaFacebook className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaLinkedin className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
                <FaYoutube className="w-4 h-4 transition-transform duration-300 transform cursor-pointer sm:w-6 sm:h-6 2xl:w-10 2xl:h-10 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full  h-[426px]   py-4 px-14 sm:w-2/3  sm:h-full sm:py-20   xl:px-[100px] xl:py-0">
          <div className="flex flex-col justify-between w-full h-full text-white sm:flex-row sm:gap-8">
<div className="flex flex-col items-start w-full gap-4 sm:gap-10 sm:items-start xl:gap-20 sm:w-1/2">
  <h3 className="text-[32px] font-medium text-black">
    Борлуулалтын төв
  </h3>
  <div className="flex flex-col items-start w-full h-full gap-3 pl-6 sm:gap-4 sm:pl-0 xl:gap-6">
    
    {/* Утас */}
    <div className="flex items-center gap-2 sm:gap-3">
      <FiPhone className="w-6 h-6 text-black" />
      <h3 className="text-[24px] text-black font-light">
        7600 7779
      </h3>
    </div>
    
    {/* Имэйл */}
    <div className="flex items-center gap-2 xl:gap-3">
      <MdOutlineEmail className="w-6 h-6 text-black" />
      <h3 className="text-[24px] text-black font-light">
        info@monblox.mn
      </h3>
    </div>
    
    {/* Хаяг */}
    <div className="flex items-start gap-2 xl:gap-3">
      <TbMapSearch className="flex-shrink-0 w-6 h-6 text-black" />
      <h3 className="text-[24px] text-black font-light max-w-full">
       Байршил
      </h3>
    </div>
  </div>
</div>

<div className="flex flex-col items-start w-full gap-4 sm:gap-10 sm:items-start xl:gap-20 sm:w-1/2">
  <h3 className="text-[32px] font-medium text-black">
    Тусламж
  </h3>
  <div className="flex flex-col items-start w-full h-full gap-3 pl-6 sm:gap-4 sm:pl-0 xl:gap-6">
    
    {/* Утас */}
    <div className="flex items-center gap-2 sm:gap-3">
      
      <h3 className="text-[24px] text-black font-light">
        Нээлттэй ажлын байр
      </h3>
    </div>
    
    {/* Имэйл */}
    <div className="flex items-center gap-2 xl:gap-3">
      
      <h3 className="text-[24px] text-black font-light">
      Хамтран ажиллах хүсэлт
      </h3>
    </div>
    
    {/* Хаяг */}
    <div className="flex items-start gap-2 xl:gap-3">
      
      <h3 className="text-[24px] text-[#C81127] font-light max-w-full">
       Гэрээт борлуулагч болох
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

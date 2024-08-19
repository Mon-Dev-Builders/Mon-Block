import Link from "next/link";
import { Container } from "./assets";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

export const Footer = () => {
  return (
    <Container>
      <div className="w-full 2xl:h-[552px] h-auto flex flex-col-reverse md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/3 w-full bg-[#C81127] md:pl-[162px] md:py-24 py-10 pr-5">
          <div className="h-full w-full flex flex-col items-start justify-center gap-10 text-white px-5 md:px-0">
            <Link href="/">
              <div
                className="2xl:w-[23rem] w-48 md:w-64 2xl:h-20 h-12 md:h-14"
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dzm85pldh/image/upload/v1723290770/tsagaanLogo_ffhbhi.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </Link>
            <h1 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-[#FFFFFF]">
              +976 9900 0000
            </h1>
            <div className="flex justify-start items-center gap-5">
              {["Twitter", "Facebook", "Linkedin", "Youtube"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 md:w-9 md:h-9 2xl:w-10 2xl:h-10 relative cursor-pointer"
                  >
                    <img src={`./${icon}.png`} className="w-full h-full" />
                    <div className="absolute left-0 top-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-50 transition-opacity rounded-full"></div>
                  </div>
                )
              )}
            </div>
            <p className="text-sm md:text-lg text-[#FFFFFF] font-normal">
              ХХК-ийн Төв Оффис, Моннис цамхаг, Сүхбаатар дүүрэг, 1-р хороо,
              Чингисийн өргөн чөлөө
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-2/3 w-full bg-[#002672] px-5 py-10 md:px-[150px] md:py-[92px]">
          <div className="w-full flex flex-col md:flex-row items-start justify-between text-white">
            <div className="w-full md:w-1/2 flex flex-col items-start gap-5 md:gap-10">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Борлуулалтын төв
              </h3>
              <div className="flex flex-col items-start gap-6 md:gap-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <FiPhone className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    7000-7000; 9901-0000
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <MdOutlineEmail className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    aivuun@monblock.mn
                  </h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <TbMapSearch className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                  <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                    байршил
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start gap-5 md:gap-10 mt-10 md:mt-0">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-[#FFFFFF]">
                Тусламж
              </h3>
              <div className="flex flex-col items-start gap-6 md:gap-8">
                <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Нээлттэй ажлын байр
                </h3>
                <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
                  Мэдээ, мэдээлэл
                </h3>
                <h3 className="text-lg md:text-xl 2xl:text-2xl text-[#FFFFFF] font-light">
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

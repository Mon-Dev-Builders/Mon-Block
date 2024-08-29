import { FaArrowRight } from "react-icons/fa";

export const NewsCard = ({ newsImage, newsDate, newsTitle }) => {
  return (
    <div className=" 2xl:w-[589px] 2xl:h-[700px] lg:w-[440px] lg:h-[540px] sm:h-[320px] sm:w-[240px]  h-[200px] w-[156px] flex flex-col items-center justify-between cursor-pointer">
      <div className="2xl:w-[589px] 2xl:h-[589px] lg:w-[440px] lg:h-[440px] sm:h-[240px] sm:w-[240px] h-[156px] w-[156px] rounded-xl cursor-pointer overflow-hidden">
        <div className="w-full h-full relative transform transition-transform duration-300 hover:scale-110">
          <img src={`./${newsImage}`} className="w-full h-full  rounded-xl " />
          <div className="flex items-center justify-center gap-3 absolute left-0 top-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-50 transition-opacity rounded-xl">
            <h5 className="md:text-4xl font-bold text-white text-xs ">Унших</h5>
            <FaArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <h6 className="sm:text-xs sm:visible text-[0px] text-font-thin text-[#000000] invisible ">
          {newsDate}
        </h6>
        <h4 className="2xl:text-xl sm:text-base text-[8px] font-bold text-[#000000]">
          {newsTitle}
        </h4>
      </div>
    </div>
  );
};

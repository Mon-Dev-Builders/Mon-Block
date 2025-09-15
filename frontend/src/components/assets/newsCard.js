import { FaArrowRight } from "react-icons/fa";

export const NewsCard = ({ newsImage, newsDate, newsTitle }) => {
  return (
    <div className="w-[120px] h-[160px] sm:w-[156px] sm:h-[200px] md:w-[240px] md:h-[320px] lg:w-[440px] lg:h-[540px] 2xl:w-[589px] 2xl:h-[700px] flex flex-col items-center justify-between cursor-pointer">
      <div className="w-[120px] h-[120px] sm:w-[156px] sm:h-[156px] md:w-[240px] md:h-[240px] lg:w-[440px] lg:h-[440px] 2xl:w-[589px] 2xl:h-[589px] rounded-xl cursor-pointer overflow-hidden">
        <div className="w-full h-full relative transform transition-transform duration-300 hover:scale-110">
          <img src={`./${newsImage}`} className="w-full h-full rounded-xl" />
          <div className="flex items-center justify-center gap-2 sm:gap-3 absolute left-0 top-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-50 transition-opacity rounded-xl">
            <h5 className="text-xs sm:text-base md:text-2xl lg:text-4xl font-bold text-white">Унших</h5>
            <FaArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 sm:gap-2">
        <h6 className="text-[8px] sm:text-xs text-font-thin text-[#000000]">
          {newsDate}
        </h6>
        <h4 className="text-[10px] sm:text-base 2xl:text-xl font-bold text-[#000000]">
          {newsTitle}
        </h4>
      </div>
    </div>
  );
};

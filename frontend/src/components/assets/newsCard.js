import { FaArrowRight } from "react-icons/fa";

export const NewsCard = ({ newsImage, newsDate, newsTitle }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-3 cursor-pointer">
      <div className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[260px] 2xl:h-[320px] rounded-xl overflow-hidden relative">
        <img
          src={newsImage?.startsWith("/") ? newsImage : `/${newsImage}`}
          alt={newsTitle}
          className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 hover:scale-110"
        />
        <div className="flex items-center justify-center gap-2 sm:gap-3 absolute inset-0 bg-slate-600/0 hover:bg-slate-600/50 transition-colors rounded-xl">
          <h5 className="text-xs sm:text-base md:text-xl lg:text-xl font-bold text-white">
            Унших
          </h5>
          <FaArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
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

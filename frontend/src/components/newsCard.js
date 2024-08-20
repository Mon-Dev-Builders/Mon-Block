import { FaArrowRight } from "react-icons/fa";

export const NewsCard = ({ newsImage, newsDate, newsTitle }) => {
  return (
    <div className="2xl:w-[589px] 2xl:h-[700px] w-[440px] h-[540px] flex flex-col items-center justify-between cursor-pointer">
      <div className="2xl:w-[589px] 2xl:h-[589px] w-[440px] h-[440px] rounded-xl cursor-pointer overflow-hidden">
        <div className="w-full h-full relative transform transition-transform duration-300 hover:scale-110">
          <img src={`./${newsImage}`} className="w-full h-full  rounded-xl " />
          <div className="flex items-center justify-center gap-3 absolute left-0 top-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-50 transition-opacity rounded-xl">
            <h5 className="text-4xl font-bold text-white">Унших</h5>
            <FaArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2">
        <h6 className="text-lg font-thin text-[#000000]">{newsDate}</h6>
        <h4 className="text-2xl  font-bold text-[#000000]">{newsTitle}</h4>
      </div>
    </div>
  );
};

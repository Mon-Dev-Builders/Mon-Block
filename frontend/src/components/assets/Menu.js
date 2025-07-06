import Link from "next/link";
import { CloseIcon } from "./Icons";

export const Menu = ({ side, setSide, paths, pathname }) => {
  return (
    <div
      className={`fixed h-full text-xl bg-white w-80 -right-0 sm:hidden ${
        side ? "-right-0" : "-right-full"
      } p-2 z-10 top-0 shadow-2xl`}
    >
      <div className="flex items-center justify-between py-5 pr-4 pl-2 text-black">
        <Link href="/">
          <div
            className="w-44 h-9 "
            style={{
              backgroundImage: `url("headLogo.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setSide(false)}
          ></div>
        </Link>

        <CloseIcon setSide={setSide} />
      </div>
      <div className="flex flex-col gap-4 p-4 text-lg border-y font-bold ">
        {paths.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              style={{
                color: item.path === pathname ? "#C81127" : "#000",
              }}
              onClick={() => setSide(false)}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

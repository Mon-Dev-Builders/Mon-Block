"use client";
import Link from "next/link";
import { Container } from "./assets";
import { usePathname, useRouter } from "next/navigation";
const paths = [
  {
    name: "Бидний тухай",
    path: "/about",
  },
  {
    name: "Бүтээгдэхүүн",
    path: "/product",
  },
  {
    name: "Мэдээ, Мэдээлэл",
    path: "/news",
  },
];
export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Container>
      <div className="shadow-2xl bg-white pb-8 2xl:pb-12 2xl:pt-20 pt-16 2xl:px-36 px-24 relative z-50">
        <div className="max-w-[1631px] m-auto flex justify-between items-center text-2xl">
          <Link href="/">
            <div
              className="2xl:w-80 w-72 2xl:h-16 h-14"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dzm85pldh/image/upload/v1723290540/Logo_iueel9.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <div className="flex w-[38rem] 2xl:w-[56rem] justify-between items-center text-xl 2xl:text-3xl">
            {paths.map((item, index) => (
              <Link href={item.path} key={index}>
                <div
                  style={{
                    color: item.path === pathname ? "#C81127" : "#000",
                  }}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => router.push("/login")}
            className="2xl:py-2 py-1 px-10 2xl:text-xl text-base 2xl:px-12 h-fit bg-[#002672] text-white rounded-2xl"
          >
            Нэвтрэх
          </button>
        </div>
      </div>
    </Container>
  );
};

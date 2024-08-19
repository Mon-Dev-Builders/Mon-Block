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
      <div className="shadow-2xl bg-white pb-8  pt-16  px-24 relative z-50">
        <div className="max-w-[1631px] m-auto flex justify-between items-center text-2xl">
          <Link href="/">
            <div
              className="w-72  h-14"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dzm85pldh/image/upload/v1723290540/Logo_iueel9.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <div className="flex w-[38rem] justify-between items-center text-xl ">
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
            style={{
              backgroundColor:
                pathname === "/login" || pathname === "/register"
                  ? "#C81127"
                  : "#002672",
            }}
            className="py-1 px-10 text-base h-fit  text-white rounded-2xl"
          >
            Нэвтрэх
          </button>
        </div>
      </div>
    </Container>
  );
};

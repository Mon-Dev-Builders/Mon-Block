"use client";
import Link from "next/link";
import { Container, Menu, MenuIcon, ProfileIcon } from "./assets";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
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
  const [side, setSide] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Container>
      <div className="relative z-50 w-full px-8 pt-8 pb-8 bg-white xl:shadow-2xl xl:pt-16 xl:px-24">
        <div className="max-w-[1631px] m-auto flex justify-between items-center text-2xl">
          <Link href="/">
            <div
              className="w-44 sm:w-60 xl:w-72 h-9 sm:h-12 xl:h-14"
              style={{
                backgroundImage: `url("headLogo.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
          <div className="sm:flex w-[28rem] xl:w-[38rem] justify-between items-center text-base xl:text-xl hidden ">
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
            className="hidden px-8 py-1 text-sm text-white xl:px-10 xl:text-base h-fit sm:flex rounded-2xl"
          >
            Нэвтрэх
          </button>
          <div className="flex gap-2 sm:hidden">
            <ProfileIcon pathname={pathname} router={router} />
            <MenuIcon setSide={setSide} />
          </div>
          <Menu
            side={side}
            setSide={setSide}
            paths={paths}
            pathname={pathname}
            router={router}
          />
        </div>
      </div>
    </Container>
  );
};

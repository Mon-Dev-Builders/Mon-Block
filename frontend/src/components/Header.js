"use client";
import Link from "next/link";
import Image from "next/image";
import { Container, Menu, MenuIcon, ProfileIcon } from "./assets";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const paths = [
  {
    name: "Нүүр",
    path: "/",
  },
  {
    name: "Бидний тухай",
    path: "/about",
  },
  {
    name: "Бүтээгдэхүүн",
    path: "/product",
  },
  {
    name: "Хэрэглээ",
    path: "/uses",
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
      <div className="relative z-50  w-full px-0 pt-8 pb-8 bg-white xl:shadow-2xl xl:pt-16 xl:px-0">
        <div className="max-w-[1148px]  mx-auto flex justify-between text-[12px]">
          <Link href="/">
            <Image
              src="/headLogo.png"
              alt="Logo"
              width={235}
              height={56} // (12px ≈ 56px, 14px ≈ 64px)
              className="w-[235px] sm:w-[235px] xl:w-[235px] h-9 sm:h-12 xl:h-14 object-contain"
            />
          </Link>
          <div className="sm:flex w-[28rem] xl:w-[688px] justify-between items-center text-base xl:text-[20px] hidden ">
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
          <div className="flex items-center">
            <button
              onClick={() => router.push("/register")}
              style={{
                backgroundColor:
                  pathname === "/login" || pathname === "/register"
                    ? "#002672"
                    : "#002672",
              }}
              className="hidden px-8 py-1 text-sm text-white xl:px-10 xl:text-base h-fit sm:flex rounded-2xl"
            >
              Нэвтрэх
            </button>
          </div>
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

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
      <div className="shadow-2xl bg-white pb-12 pt-20 px-36 relative z-50">
        <div className="max-w-[1631px] m-auto flex justify-between items-center text-2xl">
          <Link href="/">
            <img src="./monBlockLogo.png" alt="" />
          </Link>
          <div className="flex w-[910px] justify-between items-center text-[28px]">
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
            className="py-2 px-12 h-fit bg-[#002672] text-white rounded-2xl"
          >
            Нэвтрэх
          </button>
        </div>
      </div>
    </Container>
  );
};

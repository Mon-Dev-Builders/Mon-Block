import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, Header, Video } from "@/components";
import { DataProvider } from "@/components/utils/dataProvider";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "MonBlox",
  description: "Monblox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DataProvider>
          <div className="shadow-2xl w-full max-w-[1440px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </DataProvider>
      </body>
    </html>
  );
}

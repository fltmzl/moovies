import "./globals.css";
import { Poppins } from "@next/font/google";
import Navbar from "@/components/common/Navbar";
import Pwa from "./Pwa";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "optional",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900 text-white">
        <div>
          <Navbar />
          <div className="max-h-screen">{children}</div>
        </div>
        <Pwa />
        {/* <div className="grid grid-cols-[minmax(0,_0.18fr)_minmax(0,_1fr)] max-h-full">
          <div>
            <Sidebar />
          </div>
          <div className="flex flex-col overflow-scroll">
            <Navbar />
            <div className="flex-1 max-h-screen box-border">{children}</div>
          </div>
        </div> */}
      </body>
    </html>
  );
}

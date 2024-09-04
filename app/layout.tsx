import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar/SideBar";
import HeaderComponent from "@/components/Main/HeaderComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order management system",
  description: "Order management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="basis-64">
            <SideBar />
          </div>
          <div className="flex-grow px-4 pt-10 bg-neutral-50 w-full">
            <HeaderComponent />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

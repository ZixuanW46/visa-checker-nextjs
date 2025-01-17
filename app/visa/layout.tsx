import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/page_visa/Navbar";
import MobileTopPannel from "@/components/page_visa/MobileTopPannel";
export const metadata: Metadata = {
  title: "Travel With CAPY",
  description: "The best travel companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar className="hidden md:flex" tab="visa" />
      <MobileTopPannel />
      {children}
      <Navbar className="md:hidden block z-[100]" tab="visa" />
    </div>
  );
}

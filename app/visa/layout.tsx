import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/page_visa/Navbar";
import MobileTopPannel from "@/components/page_visa/MobileTopPannel";
export const metadata: Metadata = {
  title: "Travel With CAPY",
  description: "The best travel companion",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="h-[100dvh] flex flex-col">
        <Navbar className="hidden md:flex" tab="visa" />
        <MobileTopPannel />
        {children}
        <Navbar className="md:hidden block z-[100]" tab="visa" />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AntdProvider } from "@/components/providers/AntdProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const manrope = Manrope({
  subsets: ["latin"],
});

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
    <html lang="en" className={manrope.className}>
      <body>
        <NuqsAdapter>
          <AntdProvider>
            <main className="max-w-[1440px] mx-auto">{children}</main>
          </AntdProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

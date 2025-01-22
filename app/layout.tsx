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
          <AntdProvider>{children}</AntdProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

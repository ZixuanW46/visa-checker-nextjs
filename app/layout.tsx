import { manrope, ptSansNarrow, inter, helvetica } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";
import { AntdProvider } from "@/components/providers/AntdProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
    <html
      lang="en"
      className={`${manrope.variable} ${ptSansNarrow.variable} ${inter.variable} ${helvetica.variable}`}
    >
      <body className="font-manrope">
        <NuqsAdapter>
          <AntdProvider>{children}</AntdProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

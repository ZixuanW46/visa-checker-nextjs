import localFont from "next/font/local";

export const ptSansNarrow = localFont({
  src: [
    {
      path: "../public/fonts/PTSansNarrow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PTSansNarrow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pt-sans-narrow", // This allows us to use CSS variables if needed
});

export const manrope = localFont({
  src: "../public/fonts/manrope.ttf",
  variable: "--font-manrope",
});

export const inter = localFont({
  src: "../public/fonts/inter.ttf",
  variable: "--font-inter",
});

export const helvetica = localFont({
  src: "../public/fonts/Helvetica.ttf",
  variable: "--font-helvetica",
});

export const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/futura-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

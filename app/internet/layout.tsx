import Navbar from "@/components/page_visa/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="">
        <Navbar className="hidden md:flex" tab="internet" />
        {children}
        <Navbar className="md:hidden block z-[100]" tab="internet" />
      </div>
    </main>
  );
}

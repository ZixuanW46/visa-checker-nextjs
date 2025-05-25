import Navbar from "@/components/page_visa/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100dvh] overflow-x-scroll mx-auto">
      <div className="w-full h-full min-w-[20rem]">
        <Navbar className="hidden md:flex" tab="internet" showBorder />
        <div className="">{children}</div>
        <Navbar className="md:hidden" tab="internet" />
      </div>
    </main>
  );
}

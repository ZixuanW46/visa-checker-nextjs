import Navbar from "@/components/page_visa/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100dvh] max-w-[1440px] mx-auto">
      <Navbar className="hidden md:flex sticky top-0 z-[100]" tab="internet" />
      <div className="">{children}</div>
      <Navbar className="md:hidden sticky bottom-0 z-[100]" tab="internet" />
    </main>
  );
}

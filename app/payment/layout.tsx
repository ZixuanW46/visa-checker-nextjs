import Navbar from "@/components/page_visa/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100dvh]">
      <div className="w-full min-h-[100dvh] min-w-[20rem] flex flex-col relative">
        <Navbar className="hidden md:flex" tab="payment" showBorder />
        <div className="flex-1 min-w-[20rem] mb-[5rem]">{children}</div>
        <Navbar className="md:hidden" tab="payment" />
      </div>
    </main>
  );
}

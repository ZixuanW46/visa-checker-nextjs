import Hero from "@/components/page_payment/hero";
import Overview from "@/components/page_payment/overview";
import Recommendation from "@/components/page_payment/recommendation";

const Page = () => {
  return (
    <div className="w-full min-w-[20rem]">
      <Hero />
      <Overview />
      <Recommendation />
    </div>
  );
};

export default Page;

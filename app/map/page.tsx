import InteractiveMap from "@/components/page_visa/InteractiveMap";
import { regionEligibilityVisaFree } from "@/components/page_visa/RegionEligibility";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InteractiveMap regionEligibility={regionEligibilityVisaFree} />
    </div>
  );
};

export default page;

import InteractiveMap from "@/components/InteractiveMap";
import { regionEligibilityVisaFree } from "@/components/RegionEligibility";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InteractiveMap regionEligibility={regionEligibilityVisaFree} />
    </div>
  );
};

export default page;
